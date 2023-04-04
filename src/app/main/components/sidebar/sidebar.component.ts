import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( 
    private dialog : MatDialog
    ){
   
  }

  logout(){
    this.dialog.open(DeleteDialogComponent)
  }
}
