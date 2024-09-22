import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonFab, IonFabButton, IonItem, IonFabList, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, trash } from 'ionicons/icons';
import { Router } from '@angular/router';
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';
import { ListaPublicacionesComponent } from "../../componentes/lista-publicaciones/lista-publicaciones.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonLabel, IonFabList, IonItem, IonFabButton, IonFab, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ListaPublicacionesComponent]
})
export class InicioPage implements OnInit {

  publicaciones: Array<{ titulo: string, descripcion: string, imagen: string,
     fecha: string }> = []

  constructor(private router: Router,
     private publicacionesService: PublicacionesService,
    ) { 
    addIcons({addOutline,trash})
  }

  ngOnInit() {
    this.publicaciones = this.publicacionesService.obtenerPublicaciones();
  }
  ionViewWillEnter() {
    this.publicaciones = this.publicacionesService.obtenerPublicaciones();
  }
  
  async borrarTodo(){
  const confirmed = window.confirm('¿Está seguro que desea borrar toda la lista?')
  if (confirmed){
  await this.publicacionesService.borrarTodasLasPublicaciones()
  await this.ionViewWillEnter()
  //window.location.reload()
 }
}
 
  PaginaAregarPublicacion(){
    this.router.navigate(['agregar-publicacion'])  
  }
}