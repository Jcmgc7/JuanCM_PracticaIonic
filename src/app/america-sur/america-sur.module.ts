import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmericaSurPageRoutingModule } from './america-sur-routing.module';

import { AmericaSurPage } from './america-sur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmericaSurPageRoutingModule
  ],
  declarations: [AmericaSurPage]
})
export class AmericaSurPageModule {}
