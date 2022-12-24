import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { DatoAlumnoComponent } from './dato-alumno/dato-alumno.component';
import { DatosEventoComponent } from './datos-evento/datos-evento.component';
import { HistorialAlumnoComponent } from './historial-alumno/historial-alumno.component';
import { HistorialEventoComponent } from './historial-evento/historial-evento.component';
import { NuevoHistorialAlumnoComponent } from './nuevo-historial-alumno/nuevo-historial-alumno.component';
import { NuevoHistorialEventoComponent } from './nuevo-historial-evento/nuevo-historial-evento.component';
import { PagesComponent } from './pages.component';
import { ReporteAlumnoComponent } from './reporte-alumno/reporte-alumno.component';
import { ReporteEventoComponent } from './reporte-evento/reporte-evento.component';

const routes: Routes = [
    {path:'dashboard',component: PagesComponent,
    canActivate:[AuthGuard],
    children:[
        {path:'crear-alumno',component: CrearAlumnoComponent},
        {path:'crear-evento', component: CrearEventoComponent},
        {path:'dato-alumno',component: DatoAlumnoComponent},
        {path:'datos-evento',component:DatosEventoComponent},
        {path:'reporte-alumno/:id',component:ReporteAlumnoComponent},
        {path:'reporte-evento/:id',component: ReporteEventoComponent},
        {path:'historial-alumno',component: HistorialAlumnoComponent},
        {path:'historial-evento',component: HistorialEventoComponent},
        {path:'nuevo-historial-alumno',component:NuevoHistorialAlumnoComponent},
        {path:'nuevo-historial-evento',component:NuevoHistorialEventoComponent}
    ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
