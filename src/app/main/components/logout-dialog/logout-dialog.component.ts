import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logoutState } from 'src/app/login/state/login-state.actions';
import { LoginState } from 'src/app/login/state/login-state.reducer';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.css']
})
export class DeleteDialogComponent{
  
  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private route : Router,
    private store : Store<LoginState>,
    ) {

    }
  
  logout(){
    this.store.dispatch(logoutState())
    this.route.navigate(['home'])
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
