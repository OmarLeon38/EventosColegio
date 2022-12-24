import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  eventos: any={};
  constructor(public eventoService:AlumnoService,public router:Router ) { }

  ngOnInit(): void {
  }
  traerDatosEvento(){
    Swal.fire({
      title: '¿Desea registrar Evento?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Registrar',
      denyButtonText: `No acepto`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Registrado', '', 'success')
        this.eventoService.retornarEvento(this.eventos).subscribe(
          {
            next: resultado => {
              this.router.navigate(['/dashboard/nuevo-historial-evento']);
            },
            error: err => {
              console.log(err.error);
            }
          }
          );
      } else if (result.isDenied) {
        Swal.fire('Ups!', '', 'info')
      }
    })

  }

}
