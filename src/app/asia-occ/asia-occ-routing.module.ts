import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsiaOccPage } from './asia-occ.page';

const routes: Routes = [
  {
    path: '',
    component: AsiaOccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsiaOccPageRoutingModule {}
