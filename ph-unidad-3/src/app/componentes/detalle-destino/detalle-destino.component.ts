import { Component, OnInit, Input } from '@angular/core';
import { IonContent, IonList, IonCard, IonItem, IonImg, IonLabel,IonThumbnail } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-destino',
  templateUrl: './detalle-destino.component.html',
  styleUrls: ['./detalle-destino.component.scss'],
  standalone: true,
  imports: [IonContent, IonList, IonCard, IonItem,IonImg,IonLabel,IonThumbnail,
    CommonModule
  ]
})
export class DetalleDestinoComponent {

  @Input() destinos: Array<{ nombre: string; pais: string; precio: number; imagen: string }> = []; // Lista de destinos

  constructor() { }

  ngOnInit() {
  }

}
