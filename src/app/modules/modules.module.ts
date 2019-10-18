import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorModule } from './author/author.module';
import { PublicationModule } from './publication/publication.module';
import { ModulesRoutingModule } from './modules.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthorModule,
    PublicationModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
