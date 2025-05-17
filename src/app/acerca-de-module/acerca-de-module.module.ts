import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaDeComponenteComponent } from './acerca-de-componente/acerca-de-componente.component';
import { AcercaDeRoutingModule} from './acerca-de-routing.module';// necesario para las rutas



@NgModule({
  declarations: [
    AcercaDeComponenteComponent
  ],
  imports: [
    CommonModule,
    AcercaDeRoutingModule
  ]
})
export class AcercaDeModule { }
