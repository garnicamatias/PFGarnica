import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToText'
})
export class BooleanToTextPipe implements PipeTransform {

  transform(condition: boolean, ...args: string[]): string {

    return condition ? args[0] : args[1];
  }

}
