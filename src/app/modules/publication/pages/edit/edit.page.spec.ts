import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';

import { ActivatedRouteStub } from '../../../../shared/shared.stub';
import { PublicationApiService } from '../../publication-api.service';
import { PublicationApiServiceStub } from '../../publication-api.service.stub';
import { PublicationStub } from '../../publication.stub';
import { EditComponent } from './edit.page';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  const error = { message: 'error message' };
  const id = 'abcdef';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      providers: [
        { provide: PublicationApiService, useValue: PublicationApiServiceStub },
        { provide: ActivatedRoute, useValue: ActivatedRouteStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
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
        expect(component.publication).toEqual(singlePublication);
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
