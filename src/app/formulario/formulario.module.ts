import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';// necesario para las rutas
import { FormularioRoutingModule } from './formulari-routing.module';// necesario para las rutas



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule// necesario para las rutas
  ]
})
export class FormularioModule { }
