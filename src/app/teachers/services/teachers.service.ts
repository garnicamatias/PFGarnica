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

}