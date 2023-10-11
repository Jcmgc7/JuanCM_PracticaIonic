import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoRPageRoutingModule } from './lo-r-routing.module';

import { LoRPage } from './lo-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoRPageRoutingModule
  ],
  declarations: [LoRPage]
})
export class LoRPageModule {}
