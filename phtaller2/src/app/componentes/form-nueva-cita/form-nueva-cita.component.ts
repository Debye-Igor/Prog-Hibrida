import { Component, OnInit } from '@angular/core';
import { IonCard, IonItem, IonCardContent, IonInput, IonLabel, IonButton, IonIcon, IonText } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Quote } from 'src/app/servicios/quote.interface';
import { QuoteService } from 'src/app/servicios/quote.service';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-form-nueva-cita',
  templateUrl: './form-nueva-cita.component.html',
  styleUrls: ['./form-nueva-cita.component.scss'],
  standalone: true,
  imports: [IonText, FormsModule, CommonModule, IonCard, IonItem, IonCardContent, IonInput, IonLabel, IonButton, IonIcon],
  
})

export class FormNuevaCitaComponent  implements OnInit {

  quotes: Quote[] = []
  newQuote: Quote = {text: '', autor: ''}
  mensaje: string = ''
  
  constructor(private quoteService: QuoteService) {
    addIcons({
      addOutline,
 }
 )
   }

  async ngOnInit() {
   
  }

 /* async loadAllQuotes(){
    this.quotes = await this.quoteService.getAllQuotes()
    console.log("Citas cargadas:", this.quotes)
  }
*/
  async addQuote() {
    console.log("Valores de nueva cita:", this.newQuote)
    if (this.newQuote.text.length >= 5 && this.newQuote.autor.length >= 2)  {
      console.log("Agregando cita:", this.newQuote)
      await this.quoteService.addQuote(this.newQuote)
      //this.newQuote = { text: '', autor: '' }; //Para limpiar el formulario funcionando
      this.mensaje = 'Cita agregada'
      
  
    }
 }
}
