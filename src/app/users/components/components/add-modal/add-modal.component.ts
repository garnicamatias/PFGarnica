import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UsersService } from 'src/app/users/services/users.service';
import { User } from 'src/app/shared/models/user';
import { AddUser } from '../../../state/users-state.actions';
import { UsersState } from 'src/app/users/state/users-state.reducer';


@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent {

  addUserForm : FormGroup;
  
  constructor(
    private dialogRef: MatDialogRef<AddModalComponent>,
    private usersService: UsersService,
    private dialog : MatDialog,
    private store : Store<UsersState>
  ){
    
    let regexOnlyNumbers : string = '^[0-9]+$'
    let controls: any = {
      name : new FormControl('', [Validators.required]),
      surname : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      pass : new FormControl('',[Validators.required]),
      adress : new FormControl('',[Validators.required]),
      isAdmin: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required, Validators.pattern(regexOnlyNumbers)]),
    }

    this.addUserForm = new FormGroup(controls);
  }

  users = this.usersService.getUsers();

  getClass(input: string): string{
  
    if (this.addUserForm.controls[input].valid) {
      return 'validInput'
    }

    switch (input) {
      case 'name':
      case 'surname':
      case 'email':
      case 'pass':
      case 'adress':

      if (this.addUserForm.controls[input].touched && this.addUserForm.controls[input].errors?.['required'] ) 
      return 'invalidInput';
      break;
    
      case 'phone':
      
      if (this.addUserForm.controls[input].touched && this.addUserForm.controls[input].errors?.['required'] || this.addUserForm.controls[input].errors?.['pattern']) 
      return 'invalidInput';
      break;

    }

    return 'form-control'
  }

  requiredAlert(input : string): boolean{
    return this.addUserForm.controls[input].errors?.['required'] && (this.addUserForm.controls[input].dirty || this.addUserForm.controls[input].touched)
  }

  addUser(){
    let newUser : User;
    let booleanValue : boolean;
    this.addUserForm.value.isAdmin === "true" ? booleanValue = true : booleanValue = false
    newUser = {
      id: this.addUserForm.value.fileNumber + Math.random()*100,
      name: this.addUserForm.value.name,
      surname: this.addUserForm.value.surname,
      email: this.addUserForm.value.email,
      pass: this.addUserForm.value.pass,
      adress: this.addUserForm.value.pass,
      isAdmin: booleanValue,
      phone: this.addUserForm.value.phone
    }
    this.store.dispatch(AddUser({user : newUser}))
    this.dialogRef.close()
    
  }
  
}
