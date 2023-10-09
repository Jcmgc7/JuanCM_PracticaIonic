import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsiaOrPage } from './asia-or.page';

const routes: Routes = [
  {
    path: '',
    component: AsiaOrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsiaOrPageRoutingModule {}
