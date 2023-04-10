import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../logout-dialog/logout-dialog.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from 'src/app/shared/models/session';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  session$ !: Observable<Session> 

  constructor( 
    private dialog : MatDialog,
    private session : SessionService
    ){
      this.session$ = this.session.getSession()
  }

  logout(){
    this.dialog.open(DeleteDialogComponent)
  }


}
