import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './pages/create/create.page';
import { DetailComponent } from './pages/detail/detail.page';
import { EditComponent } from './pages/edit/edit.page';
import { ListComponent } from './pages/list/list.page';

export const CC_PUBLICATION_ROUTES: Routes = [
  { path: 'publication/new', component: CreateComponent },
  { path: 'publication/list', component: ListComponent },
  { path: 'publication/detail/:id', component: DetailComponent },
  { path: 'publication/edit/:id', component: EditComponent },
  { path: 'publication', redirectTo: 'publication/list' }
];

@NgModule({
  imports: [RouterModule.forChild(CC_PUBLICATION_ROUTES)],
  exports: [RouterModule]
})
export class PublicationRoutingModule { }
