import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthorRoutingModule } from './author.routing';
import { ListComponent } from './pages/list/list.page';
import { CreateComponent } from './pages/create/create.page';
import { DetailComponent } from './pages/detail/detail.page';
import { EditComponent } from './pages/edit/edit.page';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { AuthorFormService } from './author-form.service';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DetailComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    MaterialModule,
  ],
  exports: [ListComponent],
  providers: []
})
export class AuthorModule { }
