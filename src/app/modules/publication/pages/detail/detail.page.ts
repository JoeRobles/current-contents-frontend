import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PublicationApiService } from '../../publication-api.service';
import { PublicationFormService } from '../../publication-form.service';
import { PublicationItem, PublicationResponse } from '../../publication.interface';

@Component({
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailComponent implements OnInit {
  public publication: PublicationItem;
  public failed: string;
  public form: FormGroup;

  constructor(
    private publicationApiService: PublicationApiService,
    private route: ActivatedRoute,
    private publicationFormService: PublicationFormService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.getPublicationById(this.route.snapshot.params.id);
    }
    this.form = this.publicationFormService.form;
  }

  public back() {
    this.router.navigate(['publication/list']);
  }

  private getPublicationById(id: string): void {
    this.publicationApiService.getPublicationById(id).subscribe(
      singlePublication => {
        this.publication = singlePublication.Item;
        this.publicationFormService.setPublication(singlePublication.Item);
      },
      error => {
        this.failed = error.message;
      }
    );
  }
}
