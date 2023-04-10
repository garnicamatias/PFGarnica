import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSubjectsState from './subjects-state.reducer';
import { SubjectsState } from './subjects-state.reducer';

export const selectSubjectsState = createFeatureSelector<fromSubjectsState.SubjectsState>(
  fromSubjectsState.subjectsStateFeatureKey
);

export const loadSubjectsSelector = createSelector(
  selectSubjectsState,
  (state : SubjectsState) => {
      return state.loading
  }
)

export const subjectsLoadedSelector = createSelector(
  selectSubjectsState,
  (state : SubjectsState) => {
      return state.subjects
  }
)
