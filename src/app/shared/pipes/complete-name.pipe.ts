import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'completeName'
})
export class CompleteNamePipe implements PipeTransform {

  transform(array: any): string {
    let completeName = `${array.surname}, ${array.name}`
    return completeName;
  }

}
