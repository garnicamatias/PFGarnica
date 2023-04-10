import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TeacherState } from 'src/app/shared/models/teacher.state';
import { DeleteTeacher, teachersLoaded } from '../../state/teachers-state.actions';
import { Teacher } from 'src/app/shared/models/teacher';
import { TeachersService } from '../../services/teachers.service';
import { Observable, map } from 'rxjs';
import { teachersLoadedSelector } from '../../state/teachers-state.selectors';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { DeleteTeacherComponent } from '../delete-teacher/delete-teacher.component';
import { User } from 'src/app/shared/models/user';
import { LoginState } from 'src/app/login/state/login-state.reducer';
import { selectActiveUser } from 'src/app/login/state/login-state.selectors';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit{

  id !: string | null
  teachersFilter$ !: Observable<Teacher[]>
  teacher$ !: Observable<Teacher>
  session$ ?: Observable<User | undefined> 


  constructor(
    private route : ActivatedRoute,
    private store : Store<TeacherState>,
    private dialog : MatDialog,
    private router : Router,
    private loginStore : Store<LoginState>

  ){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.session$ = this.loginStore.select(selectActiveUser)
    this.teachersFilter$ = this.store.select(teachersLoadedSelector).pipe(
      map(teachers => teachers.filter(teacher => teacher.id == this.id))
    )
  }

  refresh(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.teachersFilter$ = this.store.select(teachersLoadedSelector).pipe(
      map(teachers => teachers.filter(teacher => teacher.id == this.id))
    )
  }

  editTeacherModal(teacher : Teacher) {
    this.dialog.open(EditModalComponent, { data: teacher }).beforeClosed().subscribe(()=>{
      this.refresh()
    })
  }

  deleteTeacher(teacher : Teacher){
    this.dialog.open(DeleteTeacherComponent, { data: teacher }).beforeClosed().subscribe(()=>{
      this.refresh()
    })
  }
}
