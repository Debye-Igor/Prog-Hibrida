import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButtons, IonButton, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { settingsOutline} from 'ionicons/icons';
import { addOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router';
import { CitaAleatoriaComponent } from "../componentes/cita-aleatoria/cita-aleatoria.component";
import { ConfiguracioCitaInicioService } from '../servicios/configuracio-cita-inicio.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, RouterModule, IonIcon, IonButton, IonButtons, CommonModule, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, CitaAleatoriaComponent],
})

export class HomePage  {

  mostrarCitaAleatoria: boolean = true

  constructor(private configuracionCita: ConfiguracioCitaInicioService) {
    addIcons({
      settingsOutline,
      addOutline
    }
    )
  }
// modificamos con asyn y await para el guardado de las preferencias de configuracin
  async ionViewWillEnter() {
    this.mostrarCitaAleatoria = await this.configuracionCita.getPermitirEliminar();
 }
}