import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SessionService } from '../services/session.service';
import { Session } from '../../shared/models/session';
import { Store } from '@ngrx/store';
import { LoginState } from 'src/app/login/state/login-state.reducer';
import { loginStateLoaded } from 'src/app/login/state/login-state.actions';
import { selectActiveSession, selectSesionState } from 'src/app/login/state/login-state.selectors';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate, CanActivateChild, CanLoad {
  isSessionActive = false
  constructor(
    private router : Router,
    private store : Store<{auth: LoginState}>
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.store.select(selectActiveSession).subscribe(
    (isSessionActive : boolean)=>{
      this.isSessionActive = isSessionActive
    }
    )
      if (this.isSessionActive) {
        return true
      } else {
        this.router.navigate(['login'])
        return false
      }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.store.select(selectSesionState).subscribe(
        (session : Session)=>{
          this.isSessionActive = session.isSessionActive
        }
        )
          if (this.isSessionActive) {
            return true
          } else {
            this.router.navigate(['login'])
            return false
          }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.store.select(selectSesionState).subscribe(
        (session : Session)=>{
          this.isSessionActive = session.isSessionActive
        }
        )
          if (this.isSessionActive) {
            return true
          } else {
            this.router.navigate(['login'])
            return false
          }
  }
}
