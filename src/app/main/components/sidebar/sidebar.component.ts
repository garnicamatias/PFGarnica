import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../logout-dialog/logout-dialog.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from 'src/app/shared/models/session';
import { SessionService } from 'src/app/core/services/session.service';
import { User } from 'src/app/shared/models/user';
import { LoginState } from 'src/app/login/state/login-state.reducer';
import { Store } from '@ngrx/store';
import { selectActiveUser } from 'src/app/login/state/login-state.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  session$ ?: Observable<User | undefined> 
  
  constructor( 
    private dialog : MatDialog,
    private loginStore : Store<LoginState>
    ){
  
  }

  ngOnInit(): void {
    this.session$ = this.loginStore.select(selectActiveUser)
  }

  logout(){
    this.dialog.open(DeleteDialogComponent)
  }


}
