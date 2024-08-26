import { Component, OnInit } from '@angular/core';
import { IonCardContent, IonCard, IonList, IonButton, IonIcon, IonItem, IonLabel, IonText } from "@ionic/angular/standalone";
import { Quote } from 'src/app/servicios/quote.interface';
import { QuoteService } from 'src/app/servicios/quote.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-listado-citas',
  templateUrl: './listado-citas.component.html',
  styleUrls: ['./listado-citas.component.scss'],
  standalone: true,
  imports: [IonText, IonLabel, IonItem, IonIcon, IonButton, CommonModule, IonCardContent, IonCard, IonList]
})
export class ListadoCitasComponent  implements OnInit {

  quotes: Quote[] = []

  constructor(private quoteService: QuoteService) {
    addIcons({
      trashOutline
    })
   }

  ngOnInit() {
    this.loadAllQuotes()

  }
  // Método para cargar todas las citas
  loadAllQuotes(){
    this.quotes = this.quoteService.getAllQuotes();
    console.log("Citas cargadas:", this.quotes)
  }

  // Metodo para borrar cita
  deleteQuote(quote: Quote){
    this.quotes = this.quotes.filter(q => q !== quote)
  }
}
