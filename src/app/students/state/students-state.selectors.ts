import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudentsState from './students-state.reducer';
import { StudentsState } from './students-state.reducer';

export const selectStudentsState = createFeatureSelector<fromStudentsState.StudentsState>(
  fromStudentsState.studentsStateFeatureKey
);


export const loadStudentsSelector = createSelector(
  selectStudentsState,
  (state : StudentsState) => {
      return state.loading
  }
)

export const studentsLoadedSelector = createSelector(
  selectStudentsState,
  (state : StudentsState) => {
      return state.students
  }
)
