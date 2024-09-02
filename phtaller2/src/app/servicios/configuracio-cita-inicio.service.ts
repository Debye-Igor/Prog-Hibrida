import { Injectable } from '@angular/core';
import { Preferences} from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class ConfiguracioCitaInicioService {
  private readonly PERMITIR_ELIMINAR_KEY = 'permitirEliminar'

  private permitirEliminar: boolean = true;

  constructor() { }

  // Recuperar el valor del switch  - funcion async y await / preferences
  async getPermitirEliminar(): Promise<boolean> {
    const {value} = await Preferences.get({key: this.PERMITIR_ELIMINAR_KEY})
    return value === 'true'
  }

  // Fijar valor de la opción
  async setPermitirEliminar(value: boolean): Promise<void> {
    await Preferences.set({
      key: this.PERMITIR_ELIMINAR_KEY,
      value: value.toString()
    })
  }
}
