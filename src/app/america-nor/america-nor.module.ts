import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmericaNorPageRoutingModule } from './america-nor-routing.module';

import { AmericaNorPage } from './america-nor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmericaNorPageRoutingModule
  ],
  declarations: [AmericaNorPage]
})
export class AmericaNorPageModule {}
