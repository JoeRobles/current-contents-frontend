import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ActivatedRouteStub } from '../../../../shared/shared.stub';
import { PublicationApiService } from '../../publication-api.service';
import { PublicationApiServiceStub } from '../../publication-api.service.stub';
import { DetailComponent } from './detail.page';
import { of, throwError } from 'rxjs';
import { PublicationStub } from '../../publication.stub';
import { MaterialModule } from '../../../../shared/modules/material/material.module';
import { PublicationFormService } from '../../publication-form.service';
import { PublicationFormServiceStub } from '../../publication-form.service.stub';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  const error = { message: 'error message' };
  const id = 'abcdef';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ DetailComponent ],
      providers: [
        { provide: PublicationApiService, useValue: PublicationApiServiceStub },
        { provide: PublicationFormService, useValue: PublicationFormServiceStub },
        { provide: ActivatedRoute, useValue: ActivatedRouteStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get an publication on init', inject([PublicationApiService], (publicationApiService) => {
    spyOn((component as any), 'getPublicationById').and.callThrough();
    component.ngOnInit();
    expect((component as any).getPublicationById).toHaveBeenCalledWith(id);
  }));

  it('should call get publication by id', inject([PublicationApiService], (publicationApiService) => {
    spyOn(publicationApiService, 'getPublicationById').and.callThrough();
    (component as any).getPublicationById(id);
    expect(publicationApiService.getPublicationById).toHaveBeenCalledWith(id);
  }));

  it('should get an publication', inject([PublicationApiService], (publication: PublicationApiService) => {
    spyOn(publication, 'getPublicationById').and.returnValue(of(PublicationStub.singlePublicationResponse));
    (component as any).getPublicationById(id);
    publication.getPublicationById(id).subscribe(
      singlePublication => {
        expect(component.publication).toEqual(singlePublication.Item);
      }
    );
  }));

  it('should throw error on getting an publication', inject([PublicationApiService], (publication: PublicationApiService) => {
    spyOn(publication, 'getPublicationById').and.returnValue(throwError(error));
    (component as any).getPublicationById(id);
    publication.getPublicationById(id).subscribe(
      () => {},
      err => {
        expect(component.failed).toEqual(err.message);
      });
  }));
});
