import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from '../interfaces/alumno.interface';
import { Evento } from '../interfaces/evento.inferface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dato-alumno',
  templateUrl: './dato-alumno.component.html',
  styleUrls: ['./dato-alumno.component.css']
})
export class DatoAlumnoComponent implements OnInit {
  public alumnos: Alumno[] = [];
  public alumno: any = {};
  public eventos: Evento[]=[];
  filtrarNombre: any = '';
  p: number = 1;

  constructor(public alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.obtenerAlumnos();
  }
  obtenerAlumnos() {
    this.alumnoService.getAlumno().subscribe((respuesta: any) => {
      this.alumnos = respuesta;
      console.log(this.alumnos);

    })
  }
  seleccionarAlumno(idAlumno: any) {
    this.alumnoService.seleccionarAlumno(idAlumno).subscribe((respuesta: any) => {
      this.alumno = respuesta[0];
      console.log(this.alumno);

    })

  }
  editarAlumno(){
    this.alumnoService.editarAlumno(this.alumno).subscribe((respuesta: any)=>{
      if(respuesta['resultado']=='OK'){
        Swal.fire({
          icon:'success',
          title:'Alumno editado correctamente',
          showConfirmButton:false,
          timer:2000

        })
        this.obtenerAlumnos();
      }
    })
  }
  eliminarAlumno(idAlumno: any){
    Swal.fire({
      title: '¿Desea eliminar alumno?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No acepto`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Eliminado', '', 'success')
        this.alumnoService.eliminarAlumno(idAlumno).subscribe((respuesta:any)=>{
          if(respuesta['resultado']=='OK'){
            console.log('Alumno eliminado');
            this.obtenerAlumnos();
    
          }
        })
        
      } else if (result.isDenied) {
        Swal.fire('Ups!', '', 'info')
      }
    })
    

  }


}
