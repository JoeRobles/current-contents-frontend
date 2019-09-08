import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './author/pages/list/list.page';

export const CC_ROUTES: Routes = [
  { path: 'author', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(CC_ROUTES)],
  exports: [RouterModule]
})
export class CcRoutingModule { }
