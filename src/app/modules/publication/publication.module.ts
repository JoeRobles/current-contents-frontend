import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicationRoutingModule } from './publication.routing';
import { ListComponent } from './pages/list/list.page';
import { CreateComponent } from './pages/create/create.page';
import { DetailComponent } from './pages/detail/detail.page';
import { EditComponent } from './pages/edit/edit.page';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { PublicationFormService } from './publication-form.service';
import { AuthorFormatPipe } from '../../shared/pipes/author-format.pipe';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DetailComponent,
    EditComponent,
    AuthorFormatPipe
  ],
  imports: [
    CommonModule,
    PublicationRoutingModule,
    MaterialModule
  ],
  exports: [ListComponent, AuthorFormatPipe],
  providers: [PublicationFormService]
})
export class PublicationModule { }
