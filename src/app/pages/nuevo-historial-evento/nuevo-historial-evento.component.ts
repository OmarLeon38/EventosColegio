import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import Swal from 'sweetalert2';
import { Evento } from '../interfaces/evento.inferface';

@Component({
  selector: 'app-nuevo-historial-evento',
  templateUrl: './nuevo-historial-evento.component.html',
  styleUrls: ['./nuevo-historial-evento.component.css']
})
export class NuevoHistorialEventoComponent implements OnInit {
  eventos: Evento[] = [];
  public bloque: any = 1;
  public multiBloque = new FormGroup({
    datosEvento: new FormGroup({
      nombre: new FormControl(''),
      detalleEvento: new FormControl(''),
    }),
    datosEvento2: new FormGroup({
      capacidadEvento: new FormControl(''),

    }),
    datosEvento3: new FormGroup({
      lugarEvento: new FormControl(''),
      gradoEvento: new FormControl(''),

    })
  });
  fechaEvento = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
  newHistorialEvento: any = {
    fechaEvento: this.fechaEvento
  }
  constructor(public eventoService: AlumnoService, private router: Router) {
    console.log(this.fechaEvento)
  }

  ngOnInit(): void {
    this.obtenerEvento();
  }
  obtenerEvento() {
    this.eventoService.getEvento().subscribe((respuesta: any) => {
      this.eventos = respuesta;
    })
  }
  submit() {
    this.bloque = this.bloque + 1;
    if (this.bloque == 4) {
      Swal.fire(
        'Historial registrado con exito',
        '',
        'success')
      this.router.navigate(['/dashboard/historial-evento']);
    }
  }
  btnAtras() {
    this.bloque = this.bloque - 1;
  }
  retornarEventoHistorial() { 
    console.log(this.newHistorialEvento);
    this.eventoService.nuevoHistorialEvento(this.newHistorialEvento).subscribe((respuesta: any) => {
      if (respuesta['resultado'] == 'OK') {

      }
    })
  }
  

}
 