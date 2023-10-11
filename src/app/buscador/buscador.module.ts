import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorPageRoutingModule } from './buscador-routing.module';

import { BuscadorPage } from './buscador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscadorPageRoutingModule
  ],
  declarations: [BuscadorPage]
})
export class BuscadorPageModule {
  alerCtrl: any;
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'La pagina esta en actual mantenimiento gracias por su comprenseion ',
      buttons: ['Ok']
    });
    alert.present()
  }
  doClic(){
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'La pagina esta en actual mantenimiento gracias por su comprenseion ',
      buttons: ['Ok']
  });
  alert.present()
}
}
