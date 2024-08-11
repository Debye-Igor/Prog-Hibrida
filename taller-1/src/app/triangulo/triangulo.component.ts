import { Component, OnInit } from '@angular/core';
import { IonButton, IonList, IonInput, IonItem, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { trianguloEscaleno } from '../modelo/figuraGeometrica';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonImg, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonButton, IonList, IonItem, IonInput, FormsModule],
})
export class TrianguloComponent  implements OnInit {

  triangulo: trianguloEscaleno;
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  resultado: string = "";

  constructor() { 
    this.triangulo = new trianguloEscaleno("Triángulo Escaleno", 0, 0, 0)
  }

  ngOnInit() {}

  calcularPerimetro(){
    this.triangulo.ladoA = this.ladoA
    this.triangulo.ladoB = this.ladoB
    this.triangulo.ladoC = this.ladoC
    const perimetro = this.triangulo.calcularPerimetro()
    this.resultado = `El perímetro del triángulo es ${perimetro} cm`
  }

}
