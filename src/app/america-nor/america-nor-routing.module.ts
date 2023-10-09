import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmericaNorPage } from './america-nor.page';

const routes: Routes = [
  {
    path: '',
    component: AmericaNorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmericaNorPageRoutingModule {}
