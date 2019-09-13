import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
    private authorFormService: AuthorFormService
  ) { }

  ngOnInit() {
    this.form = this.authorFormService.form;
  }

  public back() {
    
  }

  public submit() {

  }
}
