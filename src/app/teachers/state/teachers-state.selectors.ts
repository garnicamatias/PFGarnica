import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTeachersState from './teachers-state.reducer';
import { TeachersState } from './teachers-state.reducer';

export const selectTeachersState = createFeatureSelector<fromTeachersState.TeachersState>(
  fromTeachersState.teachersStateFeatureKey
);

export const loadTeachersSelector = createSelector(
  selectTeachersState,
  (state : TeachersState) => {
      return state.loading
  }
)

export const teachersLoadedSelector = createSelector(
  selectTeachersState,
  (state : TeachersState) => {
      return state?.teachers
  }
)
