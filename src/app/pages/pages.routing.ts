import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const PAGES_ROUTES: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(PAGES_ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
