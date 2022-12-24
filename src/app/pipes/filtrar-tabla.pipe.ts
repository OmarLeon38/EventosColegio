import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrartabla'
})
export class FiltrarTablaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultadoBusqueda = [];
    for (const nombre of value) {
      if (nombre.nombreAlumno.toLowerCase().indexOf(args) > -1 ||
        nombre.nombreAlumno.toUpperCase().indexOf(args) > -1 ||
        nombre.nombreAlumno.indexOf(args) > -1) {
         resultadoBusqueda.push(nombre);


      }
    }
    return resultadoBusqueda;
  }

}
