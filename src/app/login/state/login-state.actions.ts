import { createAction, props } from '@ngrx/store';
import { Session } from 'src/app/shared/models/session';

export const loadLoginState = createAction(
  '[LoginState] Load LoginState'
);

export const loginStateLoaded = createAction(
  '[LoginState] LoginState Loaded',
  props<{ session : Session}>()
);

export const logoutState = createAction(
  '[LoginState] User Logout',
);





