import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, SelectChangeEventDetail, IonList } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { FormsModule } from '@angular/forms';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonList, IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent, TrianguloComponent, FormsModule, IonSelect, IonSelectOption, CommonModule],
})
export class HomePage {

  tipoFigura: string = ""

  esCirculo(){return this.tipoFigura == "circulo"}
  esTriangulo(){return this.tipoFigura == "triangulo"}
  constructor() {}

  manejarSeleccionFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
      this.tipoFigura = $event.detail.value
    }
}
