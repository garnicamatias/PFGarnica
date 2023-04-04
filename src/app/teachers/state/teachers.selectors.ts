import { createSelector } from "@ngrx/store"
import { AppState } from "src/app/app.state"
import { TeacherState } from "src/app/shared/models/teacher.state"
import { AppState2 } from '../../app.state';

export const teachersSelector = (state : AppState2) =>{
    return state.teachers
}

export const loadTeachersSelector = createSelector(
    teachersSelector,
    (state : TeacherState) => {
        return state.loading
    }
)

export const teachersLoadedSelector = createSelector(
    teachersSelector,
    (state : TeacherState) => {
        return state?.teachers
    }
)
