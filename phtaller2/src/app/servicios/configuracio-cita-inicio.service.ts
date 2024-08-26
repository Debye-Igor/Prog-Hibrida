import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracioCitaInicioService {

  private permitirEliminar: boolean = true;

  constructor() { }

  // Recuperar el valor del switch
  getPermitirEliminar(): boolean {
    return this.permitirEliminar;
  }

  // Fijar valor de la opción
  setPermitirEliminar(value: boolean) {
    this.permitirEliminar = value;
  }
}
