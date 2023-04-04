import { createAction, props } from "@ngrx/store"
import { Teacher } from 'src/app/shared/models/teacher';

export const loadTeachers = createAction (
    '[teachers] Load teachers'
)

export const teachersLoaded = createAction (
    '[teachers] Teachers loaded',
    props<{teachersObtained : Teacher[]}>()
)