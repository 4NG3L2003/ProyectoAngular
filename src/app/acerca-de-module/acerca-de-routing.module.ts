import { NgModule } from '@angular/core';
import { RouterModule,Routes }  from "@angular/router";
import { AcercaDeComponenteComponent} from './acerca-de-componente/acerca-de-componente.component';

const routes: Routes = [
    {path: '', component: AcercaDeComponenteComponent} //Ruta vacia por defecto 
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AcercaDeRoutingModule { }