import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonTextarea, IonList, IonContent,IonThumbnail, IonImg, IonNote } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { Form, FormsModule,MinLengthValidator,NgForm } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { addIcons} from 'ionicons'; 
import { cameraOutline, trashBinSharp } from 'ionicons/icons';
import { ToastController } from '@ionic/angular';
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';

@Component({
  selector: 'app-formulario-publicacion',
  templateUrl: './formulario-publicacion.component.html',
  styleUrls: ['./formulario-publicacion.component.scss'],
  standalone: true,
  imports: [IonNote, IonImg, IonContent, IonList, IonTextarea, IonIcon, IonButton, IonInput, IonLabel, IonItem,
     CommonModule,IonThumbnail,FormsModule,IonImg ]
})
export class FormularioPublicacionComponent  implements OnInit {
  @Output() publicacionCreada = new EventEmitter<any>()
  @ViewChild('publicacionForm', { static: false }) publicacionForm!: NgForm

  publicacion = { titulo: '', descripcion: '', imagen: '' }
  imagenObligatoriaError: boolean = false;
  fotos: string[] = []
  imagenDefault:string = 'assets/defaultimagen.png'

  constructor(private publicacionesService: PublicacionesService,private toastController: ToastController) {
    addIcons({cameraOutline});
  }
  
  ngOnInit() {
    if (!this.publicacion.imagen) {
      this.publicacion.imagen = this.imagenDefault
    }
  }

  // Método para seleecionar foto 
  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    })
      if (image.base64String) {
        this.fotos.push(image.base64String)
        this.publicacion.imagen = 'data:image/jpeg;base64,' + image.base64String 
        this.imagenObligatoriaError = false 
      }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Publicación agregada correctamente.',
      duration: 2000, 
      color: 'success', 
      position: 'middle'
    });
    toast.present()
  }

  async guardarPublicacion() {
   
    if (!this.publicacion.imagen) {
      this.imagenObligatoriaError = true
      return;
    }

    if (this.publicacionForm) {
      this.publicacionForm.form.markAllAsTouched();
    }
    if (this.publicacionForm.invalid || this.publicacion.titulo.length < 5 || this.publicacion.descripcion.length < 20) {
      return
    }

    if (this.publicacion.titulo && this.publicacion.descripcion && this.publicacion.imagen) {
      await this.publicacionesService.agregarPublicacion({
        ...this.publicacion,
        imagen: this.fotos[0],
      });
      this.presentToast()
      this.limpiarFormulario()    
    }
  }

  limpiarFormulario() {
    this.publicacion = {
      titulo: '',
      descripcion: '',
      imagen: ''
    }
    this.fotos = []
    this.imagenObligatoriaError = false
    if (this.publicacionForm) {
      this.publicacionForm.resetForm() 
    }
  } 
  
}

