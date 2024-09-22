import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})

export class PublicacionesService {
  private publicaciones: Array<{ titulo: string, descripcion: string, imagen: string, fecha: string }> = [];

  constructor() {
    this.cargarPublicaciones()// Cargar desde Preferences al iniciar el servicio
  }

  // Cargar publicaciones desde Preferences
  async cargarPublicaciones() {
    const { value } = await Preferences.get({ key: 'publicaciones' });
    this.publicaciones = value ? JSON.parse(value) : []
  }

  // Agregar publicación y guardar en Preferences
  async agregarPublicacion(publicacion: { titulo: string, descripcion: string, imagen: string }) {
    const nuevaPublicacion = {
      ...publicacion,
      fecha: new Date().toISOString(),
    }
    this.publicaciones.push(nuevaPublicacion);
    await this.guardarEnStorage()
  }

  // Obtener publicaciones
  obtenerPublicaciones() {
    return this.publicaciones
  }

  // Eliminar publicación por índice (funcionando con modal)
  async eliminarPublicacion(index: number) {
    // Verifica que el índice sea válido antes de eliminar
    if (index > -1 && index < this.publicaciones.length) {
      this.publicaciones.splice(index, 1) // Eliminar la publicación de la lista
      await this.guardarEnStorage()       // guardar la lista actualizada
    }
  }
  
  // Metodo para guardar publicaciones con Preferences
  async guardarEnStorage() {
    await Preferences.set({
      key: 'publicaciones',
      value: JSON.stringify(this.publicaciones),
    })
  }

  async borrarTodasLasPublicaciones() {
    await Preferences.clear() 
    this.publicaciones = [] 
  }

}


