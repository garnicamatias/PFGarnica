import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../../../shared/models/session';
import { SessionService } from '../../../core/services/session.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( 
    private route : Router,
    private session : SessionService
    ){
   
  }

  logout(){
    let sessionLogout : Session = {
      isSessionActive : false 
    };
    this.session.logout(sessionLogout)
    this.route.navigate(['login'])
  }
}
