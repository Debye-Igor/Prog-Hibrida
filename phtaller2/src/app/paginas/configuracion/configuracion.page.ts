import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonItem, IonLabel, IonToggle } from '@ionic/angular/standalone';
import { ConfiguracioCitaInicioService } from 'src/app/servicios/configuracio-cita-inicio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonToggle, IonLabel, IonItem, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class ConfiguracionPage implements OnInit {

  permitirEliminar: boolean = false;

  constructor(private configuracionCita: ConfiguracioCitaInicioService) { }

  ngOnInit() {
    // Carga el valor desde el servicio
    this.permitirEliminar = this.configuracionCita.getPermitirEliminar();
  }

  // Maneja el cambio del switch
  togglePermitirEliminar(event: any) {
    this.permitirEliminar = event.detail.checked;
    // Guarda el valor en el servicio
    this.configuracionCita.setPermitirEliminar(this.permitirEliminar);
  }

}
