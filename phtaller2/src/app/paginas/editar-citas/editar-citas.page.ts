import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonButton} from '@ionic/angular/standalone';
import { FormNuevaCitaComponent } from "../../componentes/form-nueva-cita/form-nueva-cita.component";
import { ListadoCitasComponent } from "../../componentes/listado-citas/listado-citas.component";

@Component({
  selector: 'app-editar-citas',
  templateUrl: './editar-citas.page.html',
  styleUrls: ['./editar-citas.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonList, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, FormNuevaCitaComponent, ListadoCitasComponent]
})
export class EditarCitasPage implements OnInit {

  constructor() {}

  ngOnInit() { }

}
