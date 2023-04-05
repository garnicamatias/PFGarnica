import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsersState from './users-state.reducer';
import { UsersState } from './users-state.reducer';

export const selectUsersState = createFeatureSelector<fromUsersState.UsersState>(
  fromUsersState.usersStateFeatureKey
);


export const loadUsersSelector = createSelector(
  selectUsersState,
  (state : UsersState) => {
      return state.loading
  }
)

export const usersLoadedSelector = createSelector(
  selectUsersState,
  (state : UsersState) => {
      return state.users
  }
)
