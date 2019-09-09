import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const MODULES_ROUTES: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(MODULES_ROUTES)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
