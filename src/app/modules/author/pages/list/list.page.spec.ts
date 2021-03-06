import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { AuthorStub } from '../../author.stub';
import { AuthorApiService } from '../../author-api.service';
import { AuthorApiServiceStub } from '../../author-api.service.stub';
import { ListComponent } from './list.page';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const error = { message: 'error message' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [
        { provide: AuthorApiService, useValue: AuthorApiServiceStub }
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

  it('should get all authors on init', () => {
    spyOn((component as any), 'getAllAuthors').and.callThrough();
    component.ngOnInit();
    expect((component as any).getAllAuthors).toHaveBeenCalled();
  });

  it('should call get all authors', inject([AuthorApiService], (authorApiService) => {
    spyOn(authorApiService, 'getAllAuthors').and.callThrough();
    (component as any).getAllAuthors();
    expect(authorApiService.getAllAuthors).toHaveBeenCalled();
  }));

  it('should get all authors', inject([AuthorApiService], (author: AuthorApiService) => {
    spyOn(author, 'getAllAuthors').and.returnValue(of(AuthorStub.allAuthorsResponse));
    (component as any).getAllAuthors();
    author.getAllAuthors().subscribe(
      list => {
        expect(component.authorsList).toEqual(list.Items);
      }
    );
  }));

  it('should throw error on getting all authors', inject([AuthorApiService], (author: AuthorApiService) => {
    spyOn(author, 'getAllAuthors').and.returnValue(throwError(error));
    (component as any).getAllAuthors();
    author.getAllAuthors().subscribe(
      () => {},
      err => {
        expect(component.failed).toEqual(err.message);
      });
  }));

  it('should delete author by id', inject([AuthorApiService], (author: AuthorApiService) => {
    spyOn(author, 'deleteAuthorById').and.returnValue(of(AuthorStub.deleteAuthorResponse));
    const id = '123abc';
    (component as any).deleteAuthorById(id);
    author.deleteAuthorById(id).subscribe(
      res => {
        expect({}).toEqual(res);
      }
    );
  }));

  it('should throw error on deleting author by id', inject([AuthorApiService], (author: AuthorApiService) => {
    spyOn(author, 'deleteAuthorById').and.returnValue(throwError(error));
    const id = '123abc';
    (component as any).deleteAuthorById(id);
    author.deleteAuthorById(id).subscribe(
      () => {},
      err => {
        expect(component.failed).toEqual(err.message);
      });
  }));
});
