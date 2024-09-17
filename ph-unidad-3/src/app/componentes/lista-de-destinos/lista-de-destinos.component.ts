import { Component, OnInit, ViewChild, } from '@angular/core';
import { ModalController, IonCard, IonItem, IonImg,IonThumbnail, IonLabel, IonButton, IonIcon, IonText, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonButtons, IonInput, IonModal } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { airplaneOutline, cameraOutline, trashOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { Camera, Photo, CameraResultType, CameraSource } from '@capacitor/camera';
import { OverlayEventDetail } from '@ionic/core/components';
import { ConfirmacionEliminarComponent } from '../confirmacion-eliminar/confirmacion-eliminar.component';
import { PruebaModalComponent } from '../prueba-modal/prueba-modal.component';
import { ModalPrecioViajeComponent } from '../modal-precio-viaje/modal-precio-viaje.component';

@Component({
  selector: 'app-lista-de-destinos',
  templateUrl: './lista-de-destinos.component.html',
  styleUrls: ['./lista-de-destinos.component.scss'],
  standalone: true,
  imports: [IonModal, IonInput, IonButtons, IonList, IonTitle, IonToolbar, IonHeader, IonContent, IonText, IonIcon, IonButton, IonLabel, IonImg,
     IonItem, IonCard, IonThumbnail, CommonModule, 
  ]
})
export class ListaDeDestinosComponent  implements OnInit {

  ImageDefault = 'assets/imagenes/default.jpg'
  precio: number = 400000

  destinos: Array<{ nombre: string; pais: string; precio: number; imagen: string }> = [];
  
  constructor(private modalController: ModalController) {
    addIcons({airplaneOutline,cameraOutline,trashOutline});
   }

  ngOnInit() {
  }

  async modificarPrecio(){

    const modal = await this.modalController.create({
      component: ModalPrecioViajeComponent,
    });
    await modal.present();
  }

  async cambiarFoto() {
     
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64
      })

      const imagenBase64 = image.base64String
  }
  
  async deleteCard() {
    const modal = await this.modalController.create({
      component: PruebaModalComponent,
    });
  
    await modal.present(); 
  }
  agregarDestino() {
    
  }
}
