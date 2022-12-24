import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-historial-alumno',
  templateUrl: './historial-alumno.component.html',
  styleUrls: ['./historial-alumno.component.css']
})
export class HistorialAlumnoComponent implements OnInit {
  newHistorialesAlumno:any[]=[];
  filtrarNombre:any='';
  p: number = 1;
  constructor(public alumnoService: AlumnoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerHistoriales();
  }
  obtenerHistoriales(){
    this.alumnoService.obtenerHistorialesAlumno().subscribe((respuesta: any)=>{
      this.newHistorialesAlumno = respuesta;
      console.log(this.newHistorialesAlumno)
    })
  }
  verReporteAlumno(idAlumno: number){
    this.router.navigate(['/dashboard/reporte-alumno/',idAlumno])
    
  }

}
