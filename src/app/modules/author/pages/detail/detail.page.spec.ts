import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ActivatedRouteStub } from '../../../../shared/shared.stub';
import { AuthorApiService } from '../../author-api.service';
import { AuthorApiServiceStub } from '../../author-api.service.stub';
import { DetailComponent } from './detail.page';
import { of, throwError } from 'rxjs';
import { AuthorStub } from '../../author.stub';
import { MaterialModule } from '../../../../shared/modules/material/material.module';
import { AuthorFormService } from '../../author-form.service';
import { AuthorFormServiceStub } from '../../author-form.service.stub';

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
        { provide: AuthorApiService, useValue: AuthorApiServiceStub },
        { provide: AuthorFormService, useValue: AuthorFormServiceStub },
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
        expect(component.author).toEqual(singleAuthor.Item);
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
