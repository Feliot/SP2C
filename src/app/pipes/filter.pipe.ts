import { Pipe, PipeTransform } from '@angular/core';
import { Vehiculo } from '../models/concesionaria';
import { VehiculoServiceService } from '../services/vehiculo-service.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: string): any {
  /*  console.log(arg, value); */
    if (arg == ''  ) return value;
  const resultado=[];
   
  for(const valor of value){
    if(valor.tipo.toLowerCase().indexOf(arg.toLowerCase()) >-1){
      resultado.push(valor);
    };
  };
  return resultado;
  }

}
