import { Component, OnInit } from '@angular/core';
import { IonCardContent, IonCard, IonList, IonButton, IonIcon, IonItem, IonLabel, IonText } from "@ionic/angular/standalone";
import { Quote } from 'src/app/servicios/quote.interface';
import { QuoteService } from 'src/app/servicios/quote.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-listado-citas',
  templateUrl: './listado-citas.component.html',
  styleUrls: ['./listado-citas.component.scss'],
  standalone: true,
  imports: [IonText, IonLabel, IonItem, IonIcon, IonButton, CommonModule, IonCardContent, IonCard, IonList]
})
export class ListadoCitasComponent {

  quotes: Quote[] = []

  constructor(private quoteService: QuoteService) {
    addIcons({
      trashOutline
    })
   }

   async ionViewWillEnter() {
    await this.loadAllQuotes()
  }
  
  async ngOnInit() {
    await this.loadAllQuotes()
  }
  // Método para cargar todas las citas
  async loadAllQuotes() {
    
      this.quotes = await this.quoteService.getAllQuotes()
      console.log('Citas cargadas:', this.quotes)
    
  }

  // Método para borrar cita
  async deleteQuote(quote: Quote) {
      await this.quoteService.deleteQuote(quote.id!)
      this.quotes = this.quotes.filter(q => q.id !== quote.id)
  }
}
