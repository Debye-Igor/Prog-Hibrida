import { Injectable } from '@angular/core';
import { Quote } from './quote.interface';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotes: Quote[]= [
    { text: 'El software es como la entropía: es difícil de comprender, no pesa nada y obedece la segunda ley de la termodinámica; es decir, siempre aumenta.', autor: 'Norman Augustine'},
    { text: 'Cualquier tecnología lo suficientemente avanzada es indistinguible de la magia.', autor: 'Arthur C. Clarke'},
    { text: 'Los programas deben escribirse para que las personas los lean, y solo de manera incidental para que las máquinas los ejecuten.', autor: 'Harold Abelson'},
    { text: 'En la programación, la parte difícil no es resolver problemas, sino decidir qué problemas resolver.', autor: 'Paul Graham'}
  ]

  getRandomQuote(): Quote{
    const randomIndex = Math.floor(Math.random() * this.quotes.length)
    return this.quotes[randomIndex]
  }

  getAllQuotes():Quote[]{
    return this.quotes;
  }

  addQuote(quote: Quote){
    this.quotes.push(quote);
    console.log("Citas actualizadas:", this.quotes)
  }

  constructor() { }
}
