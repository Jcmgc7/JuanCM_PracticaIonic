import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  private _personasA = ["Abuela", "Adrian", "Alba", "Alvaro", "Angel"];
  public get personasA() {
    return this._personasA;
  }
  public set personasA(value) {
    this._personasA = value;
  }
  private _personasB = ["Borja"];
  public get personasB() {
    return this._personasB;
  }
  public set personasB(value) {
    this._personasA = value;
  }
  private _personasC = ["Calvo", "Carla", "Carlos", "Chopo", "Cris"];
  public get personasC() {
    return this._personasA;
  }
  public set personasC(value) {
    this._personasC = value;
  }
  private _personasD = ["Dani", "David", "Don Maikel"];
  public get personasD() {
    return this._personasA;
  }
  public set personasD(value) {
    this._personasD = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
