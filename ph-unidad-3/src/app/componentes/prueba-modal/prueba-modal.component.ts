import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonContent, IonHeader, IonTitle, IonButton, IonModal, IonButtons, IonList, IonItem } from "@ionic/angular/standalone";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-prueba-modal',
  templateUrl: './prueba-modal.component.html',
  styleUrls: ['./prueba-modal.component.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonButtons, IonModal, IonToolbar, IonContent, IonHeader, IonTitle, IonButton ]
})
export class PruebaModalComponent  implements OnInit {
 

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  closeModal() {
    
  }

  confirmDelete() {

  }

  ngOnInit() {}

}

