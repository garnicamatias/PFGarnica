import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/shared/models/subject';
import { SubjectsState } from '../../state/subjects-state.reducer';
import { Store } from '@ngrx/store';
import { loadSubjectsSelector, subjectsLoadedSelector } from '../../state/subjects-state.selectors';
import { loadSubjects } from '../../state/subjects-state.actions';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent {

  subjects$ !: Observable<Subject[]>
  loading$ !: Observable<Boolean>

  constructor(
    private store : Store<SubjectsState>
  ){
    
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(loadSubjectsSelector)
    this.store.dispatch(loadSubjects());
    this.subjects$ = this.store.select(subjectsLoadedSelector)
  }

}
