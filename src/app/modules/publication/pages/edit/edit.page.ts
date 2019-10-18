import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PublicationApiService } from '../../publication-api.service';
import { PublicationFormService } from '../../publication-form.service';
import { PublicationResponse } from '../../publication.interface';
import { AuthorApiService } from '../../../author/author-api.service';
import { AuthorItem } from '../../../author/author.interface';

@Component({
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditComponent implements OnInit {
  public authorsList: AuthorItem[];
  public publication: PublicationResponse;
  public failed: string;
  public form: FormGroup;

  constructor(
    private publicationApiService: PublicationApiService,
    private route: ActivatedRoute,
    private publicationFormService: PublicationFormService,
    private router: Router,
    private authorApiService: AuthorApiService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.getPublicationById(this.route.snapshot.params.id);
    }
    this.getAllAuthors();
    this.form = this.publicationFormService.form;
  }

  public back() {
    this.router.navigate(['publication/list']);
  }

  public submit() {
    this.publicationApiService.editPublication(this.form).subscribe(
      singlePublication => {
        this.back();
      },
      error => {
        this.failed = error.message;
      }
    );
  }

  private getPublicationById(id: string): void {
    this.publicationApiService.getPublicationById(id).subscribe(
      singlePublication => {
        this.publication = singlePublication;
        this.publicationFormService.setPublication(singlePublication.Item);
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
