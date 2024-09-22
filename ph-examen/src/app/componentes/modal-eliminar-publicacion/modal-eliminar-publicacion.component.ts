import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonContent, IonButton, IonTitle, IonList } from "@ionic/angular/standalone";

@Component({
  selector: 'app-modal-eliminar-publicacion',
  templateUrl: './modal-eliminar-publicacion.component.html',
  styleUrls: ['./modal-eliminar-publicacion.component.scss'],
  standalone: true,
  imports: [IonList, IonTitle, IonButton, IonContent, IonButtons, IonToolbar, IonHeader]
})

export class ModalEliminarPublicacionComponent {

  @Output() confirmacionEliminacion = new EventEmitter<boolean>()  

  constructor() {}

   isModalOpen = false
  // Cerrar modal sin confirmar
  cancelar() {
    this.confirmacionEliminacion.emit(false) 
  }

  eliminar() {
    this.confirmacionEliminacion.emit(true)  }
}

  




