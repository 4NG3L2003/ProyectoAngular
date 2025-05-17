import { NgModule } from '@angular/core';
import { RouterModule,Routes }  from "@angular/router";
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
    {path: '', component: FormularioComponent} //Ruta vacia por defecto 
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class FormularioRoutingModule { }