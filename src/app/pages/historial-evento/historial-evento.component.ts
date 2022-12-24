import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-historial-evento',
  templateUrl: './historial-evento.component.html',
  styleUrls: ['./historial-evento.component.css']
})
export class HistorialEventoComponent implements OnInit {
  newHistorialesEvento:any[]=[];
  filtrarNombreEvento: any ='';
  p: number = 1;
  constructor(public eventoService:AlumnoService,private router: Router) {

  }

  ngOnInit(): void {
    this.obtenerHistorialesEvento();
  }
  obtenerHistorialesEvento(){
    this.eventoService.obtenerHistorialesEvento().subscribe((respuesta:any)=>{
      this.newHistorialesEvento = respuesta;
      console.log(this.newHistorialesEvento);
    })
  }
  verReporteEvento(idEvento: number){
    this.router.navigate(['/dashboard/reporte-evento/',idEvento])
  }

}
