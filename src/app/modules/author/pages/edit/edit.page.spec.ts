import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';

import { ActivatedRouteStub } from '../../../../shared/shared.stub';
import { AuthorApiService } from '../../author-api.service';
import { AuthorApiServiceStub } from '../../author-api.service.stub';
import { AuthorStub } from '../../author.stub';
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
        { provide: AuthorApiService, useValue: AuthorApiServiceStub },
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

  it('should get an author on init', inject([AuthorApiService], (authorApiService) => {
    spyOn((component as any), 'getAuthorById').and.callThrough();
    component.ngOnInit();
    expect((component as any).getAuthorById).toHaveBeenCalledWith(id);
  }));

  it('should call get author by id', inject([AuthorApiService], (authorApiService) => {
    spyOn(authorApiService, 'getAuthorById').and.callThrough();
    (component as any).getAuthorById(id);
    expect(authorApiService.getAuthorById).toHaveBeenCalledWith(id);
  }));

  it('should get an author', inject([AuthorApiService], (author: AuthorApiService) => {
    spyOn(author, 'getAuthorById').and.returnValue(of(AuthorStub.singleAuthorResponse));
    (component as any).getAuthorById(id);
    author.getAuthorById(id).subscribe(
      singleAuthor => {
        expect(component.author).toEqual(singleAuthor);
      }
    );
  }));

  it('should throw error on getting an author', inject([AuthorApiService], (author: AuthorApiService) => {
    spyOn(author, 'getAuthorById').and.returnValue(throwError(error));
    (component as any).getAuthorById(id);
    author.getAuthorById(id).subscribe(
      () => {},
      err => {
        expect(component.failed).toEqual(err.message);
      });
  }));
});
