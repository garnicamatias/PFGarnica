import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TeachersService } from '../../services/teachers.service';
import { Store } from '@ngrx/store';
import { TeacherState } from 'src/app/shared/models/teacher.state';
import { Teacher } from 'src/app/shared/models/teacher';
import { DeleteTeacher } from '../../state/teachers-state.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrls: ['./delete-teacher.component.css']
})
export class DeleteTeacherComponent {
 

  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<DeleteTeacherComponent>,
    private teachersServicec: TeachersService,
    private store : Store<TeacherState>,
    @Inject(MAT_DIALOG_DATA) public data: Teacher,
    private router : Router,
    ) {

    }
  
  deleteTeacher(teacher : Teacher){
    this.store.dispatch(DeleteTeacher({teacher : teacher}))
    this.dialogRef.close()
    this.router.navigate(['main/teachers'])
  }
}
