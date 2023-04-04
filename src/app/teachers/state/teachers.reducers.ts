import { createReducer, on } from "@ngrx/store"
import { TeacherState } from "src/app/shared/models/teacher.state"
import { loadTeachers, teachersLoaded } from './teachers.actions';
import { Teacher } from '../../shared/models/teacher';

const initialState : TeacherState = {
    loading : false,
    teachers: []
}

export const teachersReducer = createReducer(
    initialState,
    on(loadTeachers, (state) => {
        const newState : TeacherState ={
            loading : true,
            teachers : state.teachers
        }
        return newState
    }),
    on(teachersLoaded, (state, {teachersObtained}) => {
        const newState : TeacherState ={
            loading : false,
            teachers : teachersObtained
        }
        return newState
    })
)