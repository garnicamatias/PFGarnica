import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { UsersService } from 'src/app/users/services/users.service';
import { User } from 'src/app/shared/models/user';
import { UsersState } from 'src/app/users/state/users-state.reducer';
import { DeleteUser } from 'src/app/users/state/users-state.actions';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent{
  
  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private usersService: UsersService,
    private store : Store<UsersState>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    ) {

    }
  
  deleteStudent(user : User){
    this.store.dispatch(DeleteUser({user : user}))
    this.dialogRef.close()
  }

}
