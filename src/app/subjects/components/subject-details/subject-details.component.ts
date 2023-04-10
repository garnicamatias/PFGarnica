import { Component } from '@angular/core';
import { SubjectsState } from '../../state/subjects-state.reducer';
import { Store } from '@ngrx/store';
import { TeacherState } from 'src/app/shared/models/teacher.state';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Subject } from 'src/app/shared/models/subject';
import { subjectsLoadedSelector } from '../../state/subjects-state.selectors';
import { Teacher } from 'src/app/shared/models/teacher';
import { teachersLoadedSelector } from 'src/app/teachers/state/teachers-state.selectors';
import { loadTeachers } from 'src/app/teachers/state/teachers-state.actions';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent {

  subject$ !: Observable<Subject[]>
  subjectName !: string | null
  teachers$ !: Observable<Teacher[]>

  constructor(
    private subjectStore : Store<SubjectsState>,
    private teacherStore : Store<TeacherState>,
    private route : ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.subjectName = this.route.snapshot.paramMap.get('name')
    this.teacherStore.dispatch(loadTeachers())
    this.subject$ = this.subjectStore.select(subjectsLoadedSelector).pipe(
      map(subjects => subjects.filter(subject => subject.name == this.subjectName))
    )
    this.teachers$ = this.teacherStore.select(teachersLoadedSelector).pipe(
      map(teachers => teachers.filter(teacher => teacher.subject == this.subjectName))
    )
  }
}
