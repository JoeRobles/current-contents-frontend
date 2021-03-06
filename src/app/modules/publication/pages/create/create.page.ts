import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { PublicationResponse } from '../../publication.interface';
import { PublicationApiService } from '../../publication-api.service';
import { PublicationFormService } from '../../publication-form.service';
import { AuthorApiService } from '../../../author/author-api.service';
import { AuthorItem } from '../../../author/author.interface';

@Component({
  selector: 'cc-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss']
})
export class CreateComponent implements OnInit {
  public authorsList: AuthorItem[];
  public publication: PublicationResponse;
  public failed: string;
  public form: FormGroup;

  constructor(
    private publicationApiService: PublicationApiService,
    private publicationFormService: PublicationFormService,
    private router: Router,
    private authorApiService: AuthorApiService
  ) { }

  ngOnInit() {
    this.getAllAuthors();
    this.publicationFormService.setPublication();
    this.form = this.publicationFormService.form;
  }

  public back() {
    this.router.navigate(['publication/list']);
  }

  public submit() {
    this.publicationApiService.newPublication(this.form).subscribe(
      res => {
        this.back();
      },
      error => {
        this.failed = error.message;
      }
    );
  }

  private getAllAuthors(): void {
    this.authorApiService.getAllAuthors().subscribe(
      list => {
        this.authorsList = list.Items;
      },
      error => {
        this.failed = error.message;
      }
    );
  }
}
