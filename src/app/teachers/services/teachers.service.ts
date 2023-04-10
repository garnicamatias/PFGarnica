import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/enviroment/enviroment';
import { Teacher } from '../../shared/models/teacher';

@Injectable({
  providedIn: 'root'
})

export class TeachersService {

  constructor(
    private http: HttpClient
  ){
    
  }

  getTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(`${env.apiURL}/teachers`)
  }

  addTeacher (newTeacher : Teacher) : Observable<Teacher> {
    return this.http.post<Teacher>(`${env.apiURL}/teachers`, newTeacher)
  }

  editTeacher (teacher : Teacher){
    return this.http.put<Teacher>(`${env.apiURL}/teachers/${teacher.id}`, teacher)
  }

  deleteTeacher(teacher : Teacher){
    return this.http.delete<Teacher>(`${env.apiURL}/teachers/${teacher.id}`)
  }
}