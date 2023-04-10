import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TeachersService } from '../../services/teachers.service';
import { TeacherState } from 'src/app/shared/models/teacher.state';
import { Store } from '@ngrx/store';
import { Teacher } from 'src/app/shared/models/teacher';
import { AddTeacher } from '../../state/teachers-state.actions';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent {

  addTeacherForm : FormGroup;
  
  constructor(
    private dialogRef: MatDialogRef<AddModalComponent>,
    private teachersService: TeachersService,
    private dialog : MatDialog,
    private store : Store<TeacherState>
  ){
    
    let regexOnlyNumbers : string = '^[0-9]+$'
    let controls: any = {
      name : new FormControl('', [Validators.required]),
      surname : new FormControl('',[Validators.required]),
      fileNumber : new FormControl('',[Validators.required, Validators.pattern(regexOnlyNumbers)]),
      subject : new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required, Validators.pattern(regexOnlyNumbers)]),
      adress: new FormControl('', [Validators.required]),
    }

    this.addTeacherForm = new FormGroup(controls);
  }

  teachers = this.teachersService.getTeachers();

  getClass(input: string): string{
  
    if (this.addTeacherForm.controls[input].valid) {
      return 'validInput'
    }

    switch (input) {
      case 'name':
      case 'surname':
      case 'adress':

      if (this.addTeacherForm.controls[input].touched && this.addTeacherForm.controls[input].errors?.['required'] ) 
      return 'invalidInput';
      break;
    
      case 'fileNumber':
      case 'age':
      
      if (this.addTeacherForm.controls[input].touched && this.addTeacherForm.controls[input].errors?.['required'] || this.addTeacherForm.controls[input].errors?.['pattern']) 
      return 'invalidInput';
      break;

    }

    return 'form-control'
  }

  requiredAlert(input : string): boolean{
    return this.addTeacherForm.controls[input].errors?.['required'] && (this.addTeacherForm.controls[input].dirty || this.addTeacherForm.controls[input].touched)
  }

  addTeacher(){
    let newTeacher : Teacher;
    newTeacher = {
      id: this.addTeacherForm.value.fileNumber + Math.random()*100,
      name: this.addTeacherForm.value.name,
      surname: this.addTeacherForm.value.surname,
      fileNumber: this.addTeacherForm.value.fileNumber,
      subject : this.addTeacherForm.value.subject,
      age: this.addTeacherForm.value.age,
      adress : this.addTeacherForm.value.adress,
    }
    this.store.dispatch(AddTeacher({teacher : newTeacher}))
    this.dialogRef.close()
    
  }
  
}
