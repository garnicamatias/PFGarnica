import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TeachersService } from '../../services/teachers.service';
import { TeacherState } from 'src/app/shared/models/teacher.state';
import { Store } from '@ngrx/store';
import { Teacher } from 'src/app/shared/models/teacher';
import { EditTeacher } from '../../state/teachers-state.actions';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  editTeacherForm : FormGroup;
  
  constructor(
    private dialogRef: MatDialogRef<EditModalComponent>,
    private teachersService: TeachersService,
    private dialog : MatDialog,
    private store : Store<TeacherState>,
    @Inject(MAT_DIALOG_DATA) public data: Teacher 
  ){
   
    let teacherToEdit = this.data
    let regexOnlyNumbers : string = '^[0-9]+$'
    let controls: any = {
      name : new FormControl(teacherToEdit.name, [Validators.required]),
      surname : new FormControl(teacherToEdit.surname,[Validators.required]),
      fileNumber : new FormControl(teacherToEdit.fileNumber,[Validators.required, Validators.pattern(regexOnlyNumbers)]),
      subject : new FormControl(teacherToEdit.subject, [Validators.required]),
      age: new FormControl(teacherToEdit.age,[Validators.required, Validators.pattern(regexOnlyNumbers)]),
      adress : new FormControl(teacherToEdit.adress, [Validators.required]),
    }

    this.editTeacherForm = new FormGroup(controls);
  }
 
  teachers = this.teachersService.getTeachers();

  getClass(input: string): string{
  
    if (this.editTeacherForm.controls[input].valid) {
      return 'validInput'
    }

    switch (input) {
      case 'name':
      case 'surname':
      case 'adress':

      if (this.editTeacherForm.controls[input].touched && this.editTeacherForm.controls[input].errors?.['required'] ) 
      return 'invalidInput';
      break;
    
      case 'id':
      case 'age':
      
      if (this.editTeacherForm.controls[input].touched && this.editTeacherForm.controls[input].errors?.['required'] || this.editTeacherForm.controls[input].errors?.['pattern']) 
      return 'invalidInput';
      break;

    }

    return 'form-control'
  }

  requiredAlert(input : string): boolean{
    return this.editTeacherForm.controls[input].errors?.['required'] && (this.editTeacherForm.controls[input].dirty || this.editTeacherForm.controls[input].touched)
  }


  editTeacher(){
    let newTeacher : Teacher;
    newTeacher = {
      id: this.data.id,
      name: this.editTeacherForm.value.name,
      surname: this.editTeacherForm.value.surname,
      fileNumber: this.editTeacherForm.value.fileNumber,
      subject: this.editTeacherForm.value.subject,
      age: this.editTeacherForm.value.age,
      adress: this.editTeacherForm.value.adress,
    }

    this.store.dispatch(EditTeacher({ teacher : newTeacher}))
    this.dialogRef.close()
  }

}
