import { createFeature, createReducer, on } from '@ngrx/store';
import * as UsersStateActions from './users-state.actions';
import { User } from 'src/app/shared/models/user';

export const usersStateFeatureKey = 'usersState';

export interface UsersState {
    loading : boolean,
    users : User[]
}

export const initialState: UsersState = {
  loading : false,
  users : []
};

export const reducer = createReducer(
  initialState,
  on(UsersStateActions.loadUsers, (state) => {
    const newState : UsersState ={
        loading : true,
        users : state.users
    }
    return newState
}),
on(UsersStateActions.usersLoaded, (state, {users}) => {
    const newState : UsersState ={
        loading : false,
        users : users
    }
    return newState
}),
on(UsersStateActions.AddUser, (state, { user: User }) => {
  return state;
}),
on(UsersStateActions.EditUser, (state, { user: User }) => {
  return state;
}),
on(UsersStateActions.DeleteUser, (state, { user: User }) => {
  return state;
})
);

export const usersStateFeature = createFeature({
  name: usersStateFeatureKey,
  reducer,
});

