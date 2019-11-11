import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing';
import { MaterialModule } from '../shared/modules/material/material.module';
import { AuthorFormService } from '../modules/author/author-form.service';
import { PublicationModule } from "../modules/publication/publication.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    PublicationModule
  ],
  exports: [HomeComponent],
  providers: [AuthorFormService]
})
export class PagesModule { }
