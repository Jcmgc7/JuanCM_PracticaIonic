import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfricPageRoutingModule } from './afric-routing.module';

import { AfricPage } from './afric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfricPageRoutingModule
  ],
  declarations: [AfricPage]
})
export class AfricPageModule {}
