import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { env } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ){
    
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${env.apiURL2}/users`)
  }

  addUser (newUser : User) : Observable<User> {
    return this.http.post<User>(`${env.apiURL2}/users`, newUser)
  }

  editUser (user : User){
    return this.http.put<User>(`${env.apiURL2}/users/${user.id}`, user)
  }

  deleteUser(user : User){
    return this.http.delete<User>(`${env.apiURL2}/users/${user.id}`)
  }
}
