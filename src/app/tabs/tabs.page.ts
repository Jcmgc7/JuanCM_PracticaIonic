import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ionViewDidEnter() {
    this.navCtrl.navigateRoot('./../perfil/perfil.module');
  }

  ngOnInit() {
  }

}
