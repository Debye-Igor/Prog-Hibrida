import { Component, Input, OnInit} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonInput  } from "@ionic/angular/standalone";
import { CommonModule,  } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-precio-viaje',
  templateUrl: './modal-precio-viaje.component.html',
  styleUrls: ['./modal-precio-viaje.component.scss'],
  standalone: true,
  imports: [IonInput, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent,
    CommonModule, FormsModule
  ]
})
export class ModalPrecioViajeComponent  implements OnInit {
  @Input() valorVuelo: number | undefined

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  closeModal() {

  }

  confirm(){

  }
  constructor() { }

  ngOnInit() {}

}
