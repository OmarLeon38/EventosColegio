import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-evento',
  templateUrl: './reporte-evento.component.html',
  styleUrls: ['./reporte-evento.component.css']
})
export class ReporteEventoComponent implements OnInit {
  reporteHistorialEvento: any = {};
  reporteEvento: any[] = [];
  public reportesEvento: any = {};
  constructor(private eventoService:AlumnoService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(params=>{
      this.reporteHistorialEvento = params['id'];
      console.log(this.reporteHistorialEvento);
    })

  }

  ngOnInit(): void {
    this.obtenerReporteEvento();
  }
  obtenerReporteEvento(){
    this.eventoService.obtenerReporteEvento(this.obtenerReporteEvento).subscribe((respuesta:any)=>{
      this.reporteEvento = respuesta;
      console.log(this.reporteEvento);
    })
  }
  seleccionarReporteEvento(idAHistorialEvento:any){
    this.eventoService.seleccionarReporteEvento(idAHistorialEvento).subscribe((respuesta:any)=>{
      this.reporteEvento = respuesta[0];
    })

  }
  editarReporteEvento(){
    this.eventoService.editarReporteEvento(this.reporteEvento).subscribe((respuesta:any)=>{
      if(respuesta['resultado']=='OK'){
        Swal.fire({
          icon:'success',
          title: 'Actualizado',
          showConfirmButton:false,
          timer:2000
        })
        this.obtenerReporteEvento();
      }
    })
  }

}
