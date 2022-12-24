import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-alumno',
  templateUrl: './reporte-alumno.component.html',
  styleUrls: ['./reporte-alumno.component.css']
})
export class ReporteAlumnoComponent implements OnInit {
  reporteHistorialAlumno: any = {};
  reporteAlumno: any[] = [];
  public reportes: any ={};
  constructor(private alumnoService:AlumnoService, private activatedRouter: ActivatedRoute) { 
    this.activatedRouter.params.subscribe(params=>{
      this.reporteHistorialAlumno = params['id'];
      console.log(this.reporteHistorialAlumno);
    })
  }

  ngOnInit(): void {
    this.obtenerReporteAlumno();
    
  }
  obtenerReporteAlumno(){
    this.alumnoService.obtenerReporteAlumno(this.obtenerReporteAlumno).subscribe((respuesta:any)=>{
      this.reporteAlumno = respuesta;
      console.log(this.reporteAlumno);
    })

    
  }
  seleccionarReporteAlumno(idAHistorial:any){
    this.alumnoService.seleccionarReporteALumno(idAHistorial).subscribe((respuesta:any)=>{
      this.reportes = respuesta[0];
      console.log(this.reportes);

    })
  }
  editarReporteAlumno(){
    this.alumnoService.editarReporteAlumno(this.reportes).subscribe((respuesta: any)=>{
      if(respuesta['resultado']=='OK'){

        Swal.fire({
          icon:'success',
          title: 'Actualizado',
          showConfirmButton:false,
          timer:2000

        })
        this.obtenerReporteAlumno();
      }
    })
    

  }
  
  

}
