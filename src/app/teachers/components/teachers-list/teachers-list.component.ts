import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/models/teacher';
import { TeachersService } from 'src/app/teachers/services/teachers.service';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadTeachers, teachersLoaded } from '../../state/teachers-state.actions';
import { loadTeachersSelector, teachersLoadedSelector } from '../../state/teachers-state.selectors';
import { TeachersState } from '../../state/teachers-state.reducer';

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

  constructor(
    private teacherService: TeachersService,
    private store : Store<TeachersState>
  ){}

  ngOnInit() : void{
    this.loading$ = this.store.select(loadTeachersSelector)
    this.store.dispatch(loadTeachers())
    this.teacherService.getTeachers().subscribe((teachersObtained : Teacher[])=>{
        this.store.dispatch(teachersLoaded({teachersObtained}))
        this.teachers$ = this.store.select(teachersLoadedSelector)
    })
    
   //ver esta parte en el video 1.05
  }


}