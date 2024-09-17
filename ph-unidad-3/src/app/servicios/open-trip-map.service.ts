import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenTripMapService {

  baseUrl: string = "http://api.opentripmap.com/0.1/en/places"

  constructor() { }

  getLista(){
    const url = `${this.baseUrl}`
  }
}
