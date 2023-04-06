import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Session } from 'src/app/shared/models/session';
import { SessionService } from '../services/session.service';
import { LoginState } from 'src/app/login/state/login-state.reducer';
import { Store } from '@ngrx/store';
import { selectSesionState } from 'src/app/login/state/login-state.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  sessionAdmin ?: boolean

  constructor(
    private session : SessionService,
    private router : Router,
    private store : Store<{auth: LoginState}>
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.store.select(selectSesionState).subscribe(
        (session : Session)=>{
          this.sessionAdmin = session.activeUser?.isAdmin
        }
        )
          if (this.sessionAdmin) {
            return true
          } else {
            alert('No tienes los permisos necesarios para ingresar a esta seccion')
            this.router.navigate(['main'])
            return false
          }
  }
  
}
