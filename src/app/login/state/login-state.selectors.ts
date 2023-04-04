import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoginState from './login-state.reducer';

export const selectLoginState = createFeatureSelector<fromLoginState.LoginState>(
  fromLoginState.loginStateFeatureKey
);

export const selectSesionState = createSelector(
  selectLoginState,
  (state) => state.session
);

export const selectActiveSession = createSelector(
  selectLoginState,
  (state) => state?.session.isSessionActive
);

export const selectActiveUser = createSelector(
  selectLoginState,
  (state) => state.session.activeUser
);