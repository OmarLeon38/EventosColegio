import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Alumno } from '../pages/interfaces/alumno.interface';
import { Evento } from '../pages/interfaces/evento.inferface';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  url: any = environment.urlApi;
  public menu =[
    {
      titulo: 'Evento',
      icono: 'icon-layers',
      submenu:[
        {titulo:'Registrar Evento',url:'/dashboard/crear-evento'},
        {titulo:'Datos del evento',url:'/dashboard/datos-evento'},
      ]
    },
    {
      titulo: 'Alumnos',
      icono: 'icon-user',
      submenu:[
        {titulo:'Registrar Alumno',url:'/dashboard/crear-alumno'},
        {titulo:'Datos del Alumno',url:'/dashboard/dato-alumno'}
      ]
    },
    //{
    //titulo: 'Historial',
    //icono: ' icon-notebook',
    //submenu:[
    //{titulo:'Nuevo historial Alumno',url:'/dashboard/nuevo-historial-alumno'},
    //{titulo:'Nuevo historial Evento',url:'/dashboard/nuevo-historial-evento'},
    //{titulo:'Historial alumno',url:'/dashboard/historial-alumno'},
    //{titulo:'Historial evento',url:'/dashboard/historial-evento'}
    //]
    //}

  ]

  constructor(private http:HttpClient) { }
  retornarAlumno(alumnos: Alumno){
    return this.http.post(`${this.url +'/alumnos/registrar'}`,JSON.stringify(alumnos))
  }
  getAlumno(){
    return this.http.get(`${this.url}/alumnos/listar`);
  }
  seleccionarAlumno(idAlumno: number){
    return this.http.get(`${this.url}/listarxId/{dni}${idAlumno}`);

  }
  editarAlumno(alumnos: Alumno){
    return this.http.put(`${this.url}/alumnos/actualizar`,JSON.stringify(alumnos));
  }
  eliminarAlumno(idAlumno:any){
    return this.http.get(`${this.url}/alumnos/eliminar/${idAlumno}`);
  }

  retornarEvento(eventos:Evento){
    return this.http.post(`${this.url}/eventos/registrar`,JSON.stringify(eventos));
  }
  getEvento(){
    return this.http.get(`${this.url}/eventos/listar`);
  }
  seleccionarEvento(idEvento:number){
    return this.http.get(`${this.url}/eventos/listarxId/{id}${idEvento}`);
  }
  editarEvento(eventos:Evento){
    return this.http.put(`${this.url}/eventos/actualizar`,JSON.stringify(eventos));

  }
  eliminarEvento(idEvento: any){
    return this.http.get(`${this.url}/eventos/eliminar/${idEvento}`);
  }
  nuevohistorialAlumno(nuevoHistorialAlumno: any){
    return this.http.post(`${this.url}NuevoHistorailAlumno`, JSON.stringify(nuevoHistorialAlumno))
  }
  nuevoHistorialEvento(nuevoHistorialEvento:any){
    return this.http.post(`${this.url}NuevoHistorialEvento`,JSON.stringify(nuevoHistorialEvento))
  }
  obtenerHistorialesAlumno(){
    return this.http.get(`${this.url}ObtenerHistoriales`);
  }
  obtenerReporteAlumno(idAlumno:any){
    return this.http.get(`${this.url}ObtenerReporteAlumno?idAlumno=${idAlumno}`);

  }
  seleccionarReporteALumno(idAHistorial:number){
    return this.http.get(`${this.url}SeleccionarReporteAlumno?id=${idAHistorial}`);

  }
  editarReporteAlumno(reporte:any){
    return this.http.post(`${this.url}EditarReporteAlumno`,JSON.stringify(reporte))

  }
  obtenerHistorialesEvento(){
    return this.http.get(`${this.url}ObtenerHistorialesEvento`);
  }
  obtenerReporteEvento(idEvento:any){
    return this.http.get(`${this.url}ObtenerReporteEvento?idEvento=${idEvento}`);
  }
  seleccionarReporteEvento(idAHistorialEvento:number){
    return this.http.get(`${this.url}SeleccionarReporteEvento?id=${idAHistorialEvento}`);

  }
  editarReporteEvento(reporteEvento:any){
    return this.http.post(`${this.url}EditarReporteEvento`,JSON.stringify(reporteEvento));
  }
}