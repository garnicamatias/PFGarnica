import { createFeature, createReducer, on } from '@ngrx/store';
import * as LoginStateActions from './login-state.actions';
import { Session } from 'src/app/shared/models/session';

export const loginStateFeatureKey = 'loginState';

export interface LoginState {
  session : Session
}

export const initialState: LoginState = {
  session : {
    isSessionActive : false
  }
};

export const loginReducer = createReducer(
  initialState,
  on(LoginStateActions.loginStateLoaded, (state, { session }) => {
    return {...state, session: {isSessionActive: true, activeUser: session.activeUser}}
  }),
  on(LoginStateActions.logoutState, (state) => {
    return {...state, session: {isSessionActive: false}, activeUser: null}
  }),
);

