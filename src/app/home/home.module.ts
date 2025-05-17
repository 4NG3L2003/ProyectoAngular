import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';// necesario para las rutas
import { HomeRoutingModule } from './home-routing.module';// necesario para las rutas


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule// necesario para las rutas
  ]
})
export class HomeModule { }
