import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsiaOrPageRoutingModule } from './asia-or-routing.module';

import { AsiaOrPage } from './asia-or.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsiaOrPageRoutingModule
  ],
  declarations: [AsiaOrPage]
})
export class AsiaOrPageModule {}
