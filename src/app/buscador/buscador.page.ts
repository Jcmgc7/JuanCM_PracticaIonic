import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  constructor(private alertController: AlertController) {} 

  async doAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'La página está en mantenimiento. Gracias por su comprensión.',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  ngOnInit() {}
}