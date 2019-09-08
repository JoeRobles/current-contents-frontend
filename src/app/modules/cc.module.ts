import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorModule } from './author/author.module';
import { CcRoutingModule } from './cc.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthorModule,
    CcRoutingModule
  ]
})
export class CcModule { }
