import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { env } from 'src/enviroment/enviroment';
import { Student } from '../../shared/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students$ !: BehaviorSubject<Student[]>
  private students !: Observable<Student[]>

  constructor(
    private http : HttpClient
  ) {
    
   }


  getStudents () : Observable<Student[]>{
    return this.http.get<Student[]>(`${env.apiURL}/students`)
  }

  addStudent (newStudent : Student) : Observable<Student> {
    return this.http.post<Student>(`${env.apiURL}/students`, newStudent)
  }

  editStudent (student : Student){
    return this.http.put<Student>(`${env.apiURL}/students/${student.id}`, student)
  }

  deleteStudent(student : Student){
    return this.http.delete<Student>(`${env.apiURL}/students/${student.id}`)
  }
}
