import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule)
  },
  {
    path: 'tabla',
    loadChildren: () => import('./tabla/tabla.module').then(m => m.TablaModule)
  },

  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de-module/acerca-de-module.module').then(m => m.AcercaDeModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, // Redirige a la ruta por defecto
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
