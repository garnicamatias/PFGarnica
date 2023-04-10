import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Student } from '../../../shared/models/student';
import { StudentsService } from '../../services/students.service';

import { StudentState } from 'src/app/shared/models/student.state';
import { Store } from '@ngrx/store';
import { DeleteStudent } from '../../state/students-state.actions';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent{
  
  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private studentsService: StudentsService,
    private store : Store<StudentState>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    ) {

    }
  
  deleteStudent(student : Student){
    this.store.dispatch(DeleteStudent({student : student}))
    this.dialogRef.close()
  }

}
