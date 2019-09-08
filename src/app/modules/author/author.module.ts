import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthorRoutingModule } from './author.routing';
import { ListComponent } from './pages/list/list.page';
import { CreateComponent } from './pages/create/create.page';
import { DetailComponent } from './pages/detail/detail.page';
import { EditComponent } from './pages/edit/edit.page';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
  ],
  exports: [ListComponent]
})
export class AuthorModule { }
