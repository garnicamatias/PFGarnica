import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TeacherState } from 'src/app/shared/models/teacher.state';
import { teachersLoaded } from '../../state/teachers-state.actions';
import { Teacher } from 'src/app/shared/models/teacher';
import { TeachersService } from '../../services/teachers.service';
import { Observable, map } from 'rxjs';
import { teachersLoadedSelector } from '../../state/teachers-state.selectors';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit{

  id !: string | null
  teachersFilter$ !: Observable<Teacher[]>
  teacher$ !: Observable<Teacher>

  constructor(
    private route : ActivatedRoute,
    private store : Store<TeacherState>,
    private teacherService : TeachersService
  ){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.teachersFilter$ = this.store.select(teachersLoadedSelector).pipe(
      map(teachers => teachers.filter(teacher => teacher.id == this.id))
    )
  }


}
