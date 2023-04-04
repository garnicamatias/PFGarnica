import { Pipe, PipeTransform } from '@angular/core';
import { Teacher } from '../models/teacher';

@Pipe({
  name: 'teachersFilter'
})
export class TeachersFilterPipe implements PipeTransform {

  transform(teachers: Teacher[], filter: string): Teacher[] {
    return teachers.filter((teacher) => {
      return teacher.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) 
    });
  }

}
