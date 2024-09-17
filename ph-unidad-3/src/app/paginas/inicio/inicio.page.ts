import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList } from '@ionic/angular/standalone';
import { ListaDeDestinosComponent } from 'src/app/componentes/lista-de-destinos/lista-de-destinos.component';
import { DetalleDestinoComponent } from 'src/app/componentes/detalle-destino/detalle-destino.component';
import { BotonSearchComponent } from 'src/app/componentes/boton-search/boton-search.component';
import { PruebaModalComponent } from 'src/app/componentes/prueba-modal/prueba-modal.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ListaDeDestinosComponent,
    DetalleDestinoComponent, BotonSearchComponent, PruebaModalComponent]
})
export class InicioPage implements OnInit{

  constructor() {
  }

  ngOnInit() {
    
  }

}
