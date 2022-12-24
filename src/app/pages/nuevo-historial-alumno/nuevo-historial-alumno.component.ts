import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import Swal from 'sweetalert2';
import { Alumno } from '../interfaces/alumno.interface';

@Component({
  selector: 'app-nuevo-historial-alumno',
  templateUrl: './nuevo-historial-alumno.component.html',
  styleUrls: ['./nuevo-historial-alumno.component.css']
})
export class NuevoHistorialAlumnoComponent implements OnInit {
  alumnos: Alumno[] = [];
  public bloque: any = 1;
  public multiBloque = new FormGroup({
    datosAlumno: new FormGroup({
      nombre: new FormControl(''),
      horallegada: new FormControl(''),
      
    }),
    datosAlumno2: new FormGroup({
      horaSalida: new FormControl(''),
    }),
    datosAlumno3: new FormGroup({
      comentario: new FormControl(''),
    })
  });
  fecha = new Date().getDate() +'-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
  newHistorialAlumno: any ={
    fechaHistorial: this.fecha

  }
  constructor(public alumnoService: AlumnoService, private router: Router) { 
    console.log(this.fecha)
  }

  ngOnInit(): void {
    this.obtenerAlumno();
  }
  obtenerAlumno() {
    this.alumnoService.getAlumno().subscribe((respuesta: any) => {
      this.alumnos = respuesta;

    })
  }
  submit() {
    this.bloque = this.bloque + 1;
    if(this.bloque==4){
      Swal.fire(
        'Historial registrado con exito',
        '',
        'success')
      this.router.navigate(['/dashboard/historial-alumno']);
    }
    
  }
  btnAtras() {
    this.bloque = this.bloque - 1;
  }
  retornarAlumnoHistorial(){
    console.log(this.newHistorialAlumno);
    this.alumnoService.nuevohistorialAlumno(this.newHistorialAlumno).subscribe((respuesta:any)=>{
      if(respuesta['resultado']=='OK'){

      }
    })
  }
  

}


