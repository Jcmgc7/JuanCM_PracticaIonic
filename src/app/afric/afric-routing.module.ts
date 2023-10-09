import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfricPage } from './afric.page';

const routes: Routes = [
  {
    path: '',
    component: AfricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfricPageRoutingModule {}
