import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonCard, IonCardContent, IonFab, IonIcon, IonFabButton } from "@ionic/angular/standalone";
import { Quote } from 'src/app/servicios/quote.interface';
import { QuoteService } from 'src/app/servicios/quote.service';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cita-aleatoria',
  templateUrl: './cita-aleatoria.component.html',
  styleUrls: ['./cita-aleatoria.component.scss'],
  standalone: true,
  imports: [ RouterModule, CommonModule, IonFabButton, IonList, IonItem, IonCard, IonCardContent, IonFab, IonIcon],

})

export class CitaAleatoriaComponent implements OnInit{
  
  randomQuote: Quote={text:'',autor:''}

  constructor(private quoteService:QuoteService) {
    addIcons({
      addOutline,
    }
    )
   }

   /* ionViewWillEnter(){
    this.loadRandomQuote()
  } */

  ngOnInit() {
    this.loadRandomQuote()
  }
  
  loadRandomQuote(){
    this.randomQuote = this.quoteService.getRandomQuote()
    console.log()
    }

}
