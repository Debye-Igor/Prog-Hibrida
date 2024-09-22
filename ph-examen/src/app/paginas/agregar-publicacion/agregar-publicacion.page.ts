import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonItem, IonList } from '@ionic/angular/standalone';
import { FormularioPublicacionComponent } from 'src/app/componentes/formulario-publicacion/formulario-publicacion.component';
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';

@Component({
  selector: 'app-agregar-publicacion',
  templateUrl: './agregar-publicacion.page.html',
  styleUrls: ['./agregar-publicacion.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    FormularioPublicacionComponent
  ]
})
export class AgregarPublicacionPage implements OnInit {

  constructor(private publicacionesService: PublicacionesService) { }

  agregarPublicacion(publicacion: { titulo: string, descripcion: string, imagen: string, fecha: string }) {
    this.publicacionesService.agregarPublicacion(publicacion);
  }

  ngOnInit() {
  }

}
