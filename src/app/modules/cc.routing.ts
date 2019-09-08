import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const CC_ROUTES: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(CC_ROUTES)],
  exports: [RouterModule]
})
export class CcRoutingModule { }
