import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginState } from 'src/app/login/state/login-state.reducer';
import { selectSesionState } from 'src/app/login/state/login-state.selectors';
import { Session } from 'src/app/shared/models/session';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit{

  userName ?: string
  userLastName ?: string


  constructor(
    private router : Router,
    private store : Store<{auth : LoginState}>
  ){

  }

  ngOnInit(): void {
    this.store.select(selectSesionState).subscribe((session : Session)=>{
      this.userName = session.activeUser?.name,
      this.userLastName = session.activeUser?.surname
    })

  }
  
  catchUrl() : boolean {
    return this.router.url === '/main'
  }


}
