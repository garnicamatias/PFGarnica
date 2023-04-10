import { createAction, props } from '@ngrx/store';
import { Teacher } from 'src/app/shared/models/teacher';

export const loadTeachers = createAction (
  '[teachers] Load teachers'
)

export const teachersLoaded = createAction (
  '[teachers] Teachers loaded',
  props<{teachersObtained : Teacher[]}>()
)

export const AddTeacher = createAction (
  '[teachers] Teacher Added',
  props<{teacher : Teacher}>()
)

export const EditTeacher = createAction (
  '[teachers] Teacher Edited',
  props<{teacher : Teacher}>()
)

export const DeleteTeacher = createAction (
  '[teachers] Teacher Deleted',
  props<{teacher : Teacher}>()
)