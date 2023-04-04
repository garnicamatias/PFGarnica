import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/shared/models/student';

export const loadStudents = createAction (
  '[students] Load students'
)

export const studentsLoaded = createAction (
  '[students] Students loaded',
  props<{students : Student[]}>()
)

export const AddStudent = createAction (
  '[students] Student Added',
  props<{student : Student}>()
)

export const EditStudent = createAction (
  '[students] Student Edited',
  props<{student : Student}>()
)

export const DeleteStudent = createAction (
  '[students] Student Deleted',
  props<{student : Student}>()
)

