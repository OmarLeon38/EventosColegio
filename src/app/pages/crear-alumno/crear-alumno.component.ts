import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from '../interfaces/alumno.interface';
import { Evento } from '../interfaces/evento.inferface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  eventos:Evento[]=[];
  alumnos: any = {};
  constructor(public alumnoService: AlumnoService,public router: Router) { }

  ngOnInit(): void {
  }
  traerDatosAlumnos() {
    Swal.fire({
      title: '¿Desea registrar alumno?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Registrar',
      denyButtonText: `No acepto`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Registrado', '', 'success')
        this.alumnoService.retornarAlumno(this.alumnos).subscribe(
          {
            next: resultado => {
              this.router.navigate(['/dashboard/nuevo-historial-alumno']);
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
