import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { DatosEventoComponent } from './datos-evento/datos-evento.component';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { DatoAlumnoComponent } from './dato-alumno/dato-alumno.component';
import { ReporteEventoComponent } from './reporte-evento/reporte-evento.component';
import { HistorialEventoComponent } from './historial-evento/historial-evento.component';
import { ReporteAlumnoComponent } from './reporte-alumno/reporte-alumno.component';
import { HistorialAlumnoComponent } from './historial-alumno/historial-alumno.component';
import { NuevoHistorialAlumnoComponent } from './nuevo-historial-alumno/nuevo-historial-alumno.component';
import { NuevoHistorialEventoComponent } from './nuevo-historial-evento/nuevo-historial-evento.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltrarTablaEventoPipe } from '../pipes/filtrar-tabla-evento.pipe';
import { FiltrarTablaPipe } from '../pipes/filtrar-tabla.pipe';



@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    CrearEventoComponent,
    DatosEventoComponent,
    CrearAlumnoComponent,
    DatoAlumnoComponent,
    ReporteEventoComponent,
    HistorialEventoComponent,
    ReporteAlumnoComponent,
    HistorialAlumnoComponent,
    NuevoHistorialAlumnoComponent,
    NuevoHistorialEventoComponent,
    FiltrarTablaEventoPipe,
    FiltrarTablaPipe
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}),
    NgxPaginationModule
    
  ]
})
export class PagesModule { }
