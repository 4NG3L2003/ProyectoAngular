import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { TablaRoutingModule } from './tabala-routing.module';// necesario para las rutas



@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    TablaRoutingModule
  ]
})
export class TablaModule { }
