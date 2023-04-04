import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixedArray'
})
export class FixedArrayPipe implements PipeTransform {

  transform(array: string[]): string {
    let result = array.join(", ")
    return result;
  }

}
