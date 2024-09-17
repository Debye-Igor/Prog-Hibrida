import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from "@ionic/angular/standalone";
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-confirmacion-eliminar',
  templateUrl: './confirmacion-eliminar.component.html',
  styleUrls: ['./confirmacion-eliminar.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent]
})
export class ConfirmacionEliminarComponent   {

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  confirmDelete() {
    this.modalController.dismiss({
      'confirmed': true
    });
  }
}

