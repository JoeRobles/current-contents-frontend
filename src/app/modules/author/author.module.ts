import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.page';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent]
})
export class AuthorModule { }
