import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DistanciaComponent } from "./distancia/distancia.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { PizzeriaComponent } from "./pizzeria/pizzeria.component";

const routes:Routes = [
{path:'', redirectTo:'/Home', pathMatch:'full'},
{path:'Distancia', component:DistanciaComponent},
{path:'Resistencias', component: ResistenciasComponent},
{path:'Cinepolis', component:CinepolisComponent},
{path:'Pizzeria', component:PizzeriaComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}