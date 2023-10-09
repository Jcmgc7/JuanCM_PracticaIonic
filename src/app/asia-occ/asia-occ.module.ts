import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsiaOccPageRoutingModule } from './asia-occ-routing.module';

import { AsiaOccPage } from './asia-occ.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsiaOccPageRoutingModule
  ],
  declarations: [AsiaOccPage]
})
export class AsiaOccPageModule {}
