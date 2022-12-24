import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import Swal from 'sweetalert2';
import { Evento } from '../interfaces/evento.inferface';

@Component({
  selector: 'app-datos-evento',
  templateUrl: './datos-evento.component.html',
  styleUrls: ['./datos-evento.component.css']
})
export class DatosEventoComponent implements OnInit {
  public eventos: Evento[] = [];
  public evento: any = {};
  filtrarNombreEvento: any = '';
  p: number = 1;


  constructor(public eventoService: AlumnoService) { }

  ngOnInit(): void {
    this.obtenerEventos();
  }
  obtenerEventos() {
    this.eventoService.getEvento().subscribe((respuesta: any) => {
      this.eventos = respuesta;
      console.log(this.eventos);
    })
  }
  seleccionarEvento(idEvento: any) {
    this.eventoService.seleccionarEvento(idEvento).subscribe((respuesta: any) => {
      this.evento = respuesta[0];
      console.log(this.evento);
    })
  }
  editarEvento() {
    this.eventoService.editarEvento(this.evento).subscribe((respuesta: any) => {
      if (respuesta['resultado'] == 'OK') {
        Swal.fire({
          icon: 'success',
          title: 'Eveneto editado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.obtenerEventos();
      }
    })
  }
  eliminarEvento(idEvento: any) {
    Swal.fire({
      title: '¿Desea eliminar evento',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No acepto`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado', '', 'success')
        this.eventoService.eliminarEvento(idEvento).subscribe((respuesta: any) => {
          if (respuesta['resultado'] == 'OK') {
            console.log('Evento eliminado');
            this.obtenerEventos();
          }
        })
      } else if (result.isDenied) {
        Swal.fire('Ups!', '', 'info')
      }
    })
  }

}
