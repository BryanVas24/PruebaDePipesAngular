import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
//PipeTransform obliga a que exista un transform ya que siempre debe existir para que una pipe funcione
export class TemperaturePipe implements PipeTransform {
  //Esto lo usara angular cada vez que se llame esta pipe
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ) {
    let val: number;
    let outputTemp: number;
    let symbol: 'Cº' | 'ºF';

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    if (!outputType) {
      symbol = inputType == 'cel' ? 'Cº' : 'ºF';
    } else {
      symbol = outputType == 'cel' ? 'Cº' : 'ºF';
    }
    return `${outputTemp} ${symbol}`;
  }
}
