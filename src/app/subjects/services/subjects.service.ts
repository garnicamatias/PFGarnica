import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/shared/models/subject';
import { env } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private subjects !: Observable<Subject[]>

  constructor(
    private http : HttpClient
  ) {
    
   }


  getSubjects () : Observable<Subject[]>{
    return this.http.get<Subject[]>(`${env.apiURL2}/subjects`)
  }

}
