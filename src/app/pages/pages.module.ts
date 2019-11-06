import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { MaterialModule } from '../shared/modules/material/material.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ],
  exports: [HomeComponent]
})
export class PagesModule { }
