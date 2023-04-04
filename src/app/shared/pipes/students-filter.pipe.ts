import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'studentsFilter'
})
export class StudentsFilterPipe implements PipeTransform {

  transform(students : Student[], filter : string): Student[] {
    return students.filter((student)=>{
       return student.surname.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    })
  }

}
