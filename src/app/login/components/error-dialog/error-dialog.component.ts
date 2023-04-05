import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent {

  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<ErrorDialogComponent>,
  ){

  }

  closeDialog(){
    this.dialogRef.close()
  }
}
