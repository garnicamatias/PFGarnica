import { createAction, props } from '@ngrx/store';
import { Subject } from 'src/app/shared/models/subject';

export const loadSubjects = createAction (
  '[subjects] Load subjects'
)

export const subjectsLoaded = createAction (
  '[subjects] Subjects loaded',
  props<{subject : Subject[]}>()
)




