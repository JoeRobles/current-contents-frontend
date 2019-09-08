import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './pages/create/create.page';
import { DetailComponent } from './pages/detail/detail.page';
import { EditComponent } from './pages/edit/edit.page';
import { ListComponent } from './pages/list/list.page';

export const CC_AUTHOR_ROUTES: Routes = [
  { path: 'author/new', component: CreateComponent },
  { path: 'author/list', component: ListComponent },
  { path: 'author/detail/:id', component: DetailComponent },
  { path: 'author/edit/:id', component: EditComponent },
  { path: 'author', redirectTo: 'author/list' }
];

@NgModule({
  imports: [RouterModule.forChild(CC_AUTHOR_ROUTES)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
