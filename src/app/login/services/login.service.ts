import { Injectable } from '@angular/core';
import { LoginUser } from 'src/app/shared/models/loginUser';
import { User } from 'src/app/shared/models/user';
import { SessionService } from '../../core/services/session.service';
import { Session } from '../../shared/models/session';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { env } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private session : SessionService,
    private http : HttpClient
    ) { 
    
   }

   login(user: LoginUser): Observable<Session>{
    return this.http.get<User[]>(`${env.apiURL2}/users`).pipe(
      map((users: User[]) => {
        let validatedUser = users.find((u: User) => u.email === user.email && u.pass === user.pass);
        console.log(validatedUser)
        if(validatedUser){
          const session: Session = {
            isSessionActive: true,
            activeUser: validatedUser
          }
          
          return session 
        }else{
          const session: Session = {
            isSessionActive: false
          }

          return session
        }
      })
    );
  }
}
