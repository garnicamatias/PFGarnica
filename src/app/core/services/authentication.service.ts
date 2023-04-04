import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { LoginUser } from 'src/app/shared/models/loginUser';
import { User } from 'src/app/shared/models/user';
import { env } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http : HttpClient
    ) { 
    
  }
  
  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${env.apiURL2}/users`)
  }

  authenticateUser( loginData : LoginUser, users: User[] ) : boolean{

    let match = users.find(user => loginData.email === user.email)
    if(match && match.pass === loginData.pass){
      return true
    } else return false
  }
}
