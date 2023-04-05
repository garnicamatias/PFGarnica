import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/user';

export const loadUsers = createAction (
  '[users] Load users'
)

export const usersLoaded = createAction (
  '[users] Users loaded',
  props<{users : User[]}>()
)

export const AddUser = createAction (
  '[users] User Added',
  props<{user : User}>()
)

export const EditUser = createAction (
  '[users] User Edited',
  props<{user : User}>()
)

export const DeleteUser = createAction (
  '[users] User Deleted',
  props<{user : User}>()
)

