import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { PublicationStub } from '../../publication.stub';
import { PublicationApiService } from '../../publication-api.service';
import { PublicationApiServiceStub } from '../../publication-api.service.stub';
import { ListComponent } from './list.page';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const error = { message: 'error message' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [
        { provide: PublicationApiService, useValue: PublicationApiServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all publications on init', () => {
    spyOn((component as any), 'getAllPublications').and.callThrough();
    component.ngOnInit();
    expect((component as any).getAllPublications).toHaveBeenCalled();
  });

  it('should call get all publications', inject([PublicationApiService], (publicationApiService) => {
    spyOn(publicationApiService, 'getAllPublications').and.callThrough();
    (component as any).getAllPublications();
    expect(publicationApiService.getAllPublications).toHaveBeenCalled();
  }));

  it('should get all publications', inject([PublicationApiService], (publication: PublicationApiService) => {
    spyOn(publication, 'getAllPublications').and.returnValue(of(PublicationStub.allPublicationsResponse));
    (component as any).getAllPublications();
    publication.getAllPublications().subscribe(
      list => {
        expect(component.publicationsList).toEqual(list.Items);
      }
    );
  }));

  it('should throw error on getting all publications', inject([PublicationApiService], (publication: PublicationApiService) => {
    spyOn(publication, 'getAllPublications').and.returnValue(throwError(error));
    (component as any).getAllPublications();
    publication.getAllPublications().subscribe(
      () => {},
      err => {
        expect(component.failed).toEqual(err.message);
      });
  }));

  it('should delete publication by id', inject([PublicationApiService], (publication: PublicationApiService) => {
    spyOn(publication, 'deletePublicationById').and.returnValue(of(PublicationStub.deletePublicationResponse));
    const id = '123abc';
    (component as any).deletePublicationById(id);
    publication.deletePublicationById(id).subscribe(
      res => {
        expect({}).toEqual(res);
      }
    );
  }));

  it('should throw error on deleting publication by id', inject([PublicationApiService], (publication: PublicationApiService) => {
    spyOn(publication, 'deletePublicationById').and.returnValue(throwError(error));
    const id = '123abc';
    (component as any).deletePublicationById(id);
    publication.deletePublicationById(id).subscribe(
      () => {},
      err => {
        expect(component.failed).toEqual(err.message);
      });
  }));
});
