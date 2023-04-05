import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UsersService } from 'src/app/users/services/users.service';
import { UsersState } from 'src/app/users/state/users-state.reducer';
import { User } from 'src/app/shared/models/user';
import { EditUser } from 'src/app/users/state/users-state.actions';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  editUserForm : FormGroup;
  
  constructor(
    private dialogRef: MatDialogRef<EditModalComponent>,
    private usersService: UsersService,
    private dialog : MatDialog,
    private store : Store<UsersState>,
    @Inject(MAT_DIALOG_DATA) public data: User 
  ){
   
    let studentToEdit = this.data
    let regexOnlyNumbers : string = '^[0-9]+$'
    let controls: any = {
      name : new FormControl(studentToEdit.name, [Validators.required]),
      surname : new FormControl(studentToEdit.surname,[Validators.required]),
      email : new FormControl(studentToEdit.email,[Validators.required]),
      pass : new FormControl(studentToEdit.pass,[Validators.required]),
      adress : new FormControl(studentToEdit.adress,[Validators.required]),
      isAdmin: new FormControl(studentToEdit.isAdmin ? "true" : "false",[Validators.required]),
      phone: new FormControl(studentToEdit.phone,[Validators.required, Validators.pattern(regexOnlyNumbers)]),
    }

    this.editUserForm = new FormGroup(controls);
  }
 
  users = this.usersService.getUsers();

  getClass(input: string): string{
  
    if (this.editUserForm.controls[input].valid) {
      return 'validInput'
    }

    switch (input) {
      case 'name':
      case 'surname':
      case 'email':
      case 'pass':
      case 'adress':

      if (this.editUserForm.controls[input].touched && this.editUserForm.controls[input].errors?.['required'] ) 
      return 'invalidInput';
      break;
    
      case 'phone':
      
      if (this.editUserForm.controls[input].touched && this.editUserForm.controls[input].errors?.['required'] || this.editUserForm.controls[input].errors?.['pattern']) 
      return 'invalidInput';
      break;

    }

    return 'form-control'
  }

  requiredAlert(input : string): boolean{
    return this.editUserForm.controls[input].errors?.['required'] && (this.editUserForm.controls[input].dirty || this.editUserForm.controls[input].touched)
  }


  editUser(){
    let newUser : User;
    let booleanValue : boolean;
    this.editUserForm.value.isAdmin === "true" ? booleanValue = true : booleanValue = false
    newUser = {
      id: this.data.id,
      name: this.editUserForm.value.name,
      surname: this.editUserForm.value.surname,
      email: this.editUserForm.value.email,
      pass: this.editUserForm.value.pass,
      adress: this.editUserForm.value.pass,
      isAdmin: booleanValue,
      phone: this.editUserForm.value.phone
    }

    this.store.dispatch(EditUser({ user : newUser}))
    this.dialogRef.close()
  }


}



