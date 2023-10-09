import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OceanPageRoutingModule } from './ocean-routing.module';

import { OceanPage } from './ocean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OceanPageRoutingModule
  ],
  declarations: [OceanPage]
})
export class OceanPageModule {}
