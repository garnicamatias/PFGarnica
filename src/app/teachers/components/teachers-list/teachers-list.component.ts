import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/models/teacher';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadTeachers } from '../../state/teachers-state.actions';
import { loadTeachersSelector, teachersLoadedSelector } from '../../state/teachers-state.selectors';
import { TeachersState } from '../../state/teachers-state.reducer';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { LoginState } from 'src/app/login/state/login-state.reducer';
import { selectActiveUser } from 'src/app/login/state/login-state.selectors';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  teachers !: Teacher[]
  teachers$ !: Observable<Teacher[]>
  filter !: string;
  loading$ !: Observable<Boolean>
  session$ ?: Observable<User | undefined> 


  constructor(
    private store : Store<TeachersState>,
    private dialog : MatDialog,
    private router : Router,
    private loginStore : Store<LoginState>

  ){}

  ngOnInit() : void{
    this.session$ = this.loginStore.select(selectActiveUser)
    this.loading$ = this.store.select(loadTeachersSelector)
    this.store.dispatch(loadTeachers())
    this.teachers$ = this.store.select(teachersLoadedSelector)
    }

  refresh(){
    this.loading$ = this.store.select(loadTeachersSelector)
    this.store.dispatch(loadTeachers())
    this.teachers$ = this.store.select(teachersLoadedSelector)
  }

  addTeacherModal() {
      this.dialog.open(AddModalComponent).beforeClosed().subscribe(()=>{
        this.refresh()
      })
    }
  
}