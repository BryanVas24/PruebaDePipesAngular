import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
//PipeTransform obliga a que exista un transform ya que siempre debe existir para que una pipe funcione
export class TemperaturePipe implements PipeTransform {
  //Esto lo usara angular cada vez que se llame esta pipe
  transform(value: string | number) {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    const outputTemp = val * (9 / 5) + 32;
    return `${outputTemp} ºF`;
  }
}
