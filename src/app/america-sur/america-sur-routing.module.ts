import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmericaSurPage } from './america-sur.page';

const routes: Routes = [
  {
    path: '',
    component: AmericaSurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmericaSurPageRoutingModule {}
