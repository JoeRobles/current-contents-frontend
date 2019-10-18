import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthorResponse } from '../../author.interface';
import { AuthorApiService } from '../../author-api.service';
import { AuthorFormService } from '../../author-form.service';

@Component({
  selector: 'cc-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss']
})
export class CreateComponent implements OnInit {
  public author: AuthorResponse;
  public failed: string;
  public form: FormGroup;

  constructor(
    private authorApiService: AuthorApiService,
    private authorFormService: AuthorFormService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authorFormService.setAuthor();
    this.form = this.authorFormService.form;
  }

  public back() {
    this.router.navigate(['author/list']);
  }

  public submit() {
    this.authorApiService.newAuthor(this.form).subscribe(
      res => {
        this.back();
      },
      error => {
        this.failed = error.message;
      }
    );
  }
}
