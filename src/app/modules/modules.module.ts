import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorModule } from './author/author.module';
import { ModulesRoutingModule } from './modules.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthorModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
