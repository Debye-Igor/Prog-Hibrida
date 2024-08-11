import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from "@ionic/angular/standalone";
import { Circulo } from '../modelo/figuraGeometrica';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonImg, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonButton, IonList, IonItem, IonInput, FormsModule]
})

export class CirculoComponent  implements OnInit {
  
  circulo: Circulo;
  radio: number = 0;
  resultado: string =""

  constructor() {
    this.circulo = new Circulo('mi circulo', 0)
   }

  ngOnInit() {}

  calcularPerimetro(){
    this.circulo.radio = this.radio
    const perimetro = this.circulo.calcularPerimetro()
    this.resultado =  `El perimetro del circulo es ${perimetro.toFixed(2)} cm`
  }

}