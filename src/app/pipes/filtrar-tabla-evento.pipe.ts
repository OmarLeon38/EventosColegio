import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarTablaEvento'
})
export class FiltrarTablaEventoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultadoBusqueda = [];
    for (const nombreEvento of value) {
      if (nombreEvento.nombreEvento.toLowerCase().indexOf(args) > -1 ||
        nombreEvento.nombreEvento.toUpperCase().indexOf(args) > -1 ||
        nombreEvento.nombreEvento.indexOf(args) > -1) {
         resultadoBusqueda.push(nombreEvento);


      }
    }
    return resultadoBusqueda;
  }

}
