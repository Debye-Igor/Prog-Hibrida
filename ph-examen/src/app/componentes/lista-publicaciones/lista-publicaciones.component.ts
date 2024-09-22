import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ModalController,IonList, IonIcon, IonItem, IonLabel, IonThumbnail, IonImg, IonModal, IonContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import { ModalEliminarPublicacionComponent } from "../modal-eliminar-publicacion/modal-eliminar-publicacion.component";
import { Preferences } from '@capacitor/preferences';
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';

@Component({
  selector: 'app-lista-publicaciones',
  templateUrl: './lista-publicaciones.component.html',
  styleUrls: ['./lista-publicaciones.component.scss'],
  standalone: true,
  imports: [IonContent, IonModal, IonImg, IonLabel, IonItem, IonIcon, IonList, IonThumbnail, 
    CommonModule, ModalEliminarPublicacionComponent,]
 
})
export class ListaPublicacionesComponent  implements OnInit {

  @Output() confirmacionEliminacion = new EventEmitter<boolean>() 

  @Input() publicaciones: Array<{ titulo: string, descripcion: string,
     imagen: string, fecha: string }> = []
  

  indiceSeleccionado: number |null=null
  
  constructor ( private publicacionesService : PublicacionesService){
      addIcons({trash});
      }
  
  ionViewWillEnter() {
    this.cargarPublicaciones()
  }
  ionViewDidEnter(){
    this.cargarPublicaciones()
  }

  ngOnInit() {
    this.cargarPublicaciones();
}

async cargarPublicaciones() {

    const { value } = await Preferences.get({ key: 'publicaciones' })
    if (value) {
      this.publicaciones = JSON.parse(value)
    } else {
      this.publicaciones = []
    }
  }

  isModalOpen = false
  
  setOpen(isOpen: boolean, index?: number) {
    this.isModalOpen = isOpen
    if (isOpen && index !== undefined) {
      this.indiceSeleccionado = index
    }
  }

  eliminarPublicacion(confirmado: boolean) {
    if (confirmado && this.indiceSeleccionado !== null) {
      this.publicacionesService.eliminarPublicacion(this.indiceSeleccionado).then(() => {
        this.cargarPublicaciones()
      })
    }
    this.setOpen(false)
  }
    
}
   