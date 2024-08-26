import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'editar-citas',
    loadComponent: () => import('./paginas/editar-citas/editar-citas.page').then( m => m.EditarCitasPage)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./paginas/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
];
