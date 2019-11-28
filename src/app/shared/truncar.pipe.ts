import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe implements PipeTransform {
 // transform(value: any, ...arg: any[]): any {
   // number[] = Array<number>
  transform(value: string, ...rest: number[]): string {
    const limit = rest[0];
    return (value.length > limit) ?
      value.substr(0, limit) + '...' : value;
  }

}
