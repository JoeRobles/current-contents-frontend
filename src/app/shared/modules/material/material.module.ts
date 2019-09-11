import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatFormFieldModule, MatOptionModule, MatSelectModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule { }
