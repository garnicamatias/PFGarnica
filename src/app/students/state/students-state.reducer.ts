import { createFeature, createReducer, on } from '@ngrx/store';
import * as StudentsStateActions from './students-state.actions';
import { Student } from 'src/app/shared/models/student';

export const studentsStateFeatureKey = 'studentsState';

export interface StudentsState {
    loading : boolean,
    students : Student[]
}

export const initialState: StudentsState = {
  loading : false,
  students : []
};

export const reducer = createReducer(
  initialState,
  on(StudentsStateActions.loadStudents, (state) => {
    const newState : StudentsState ={
        loading : true,
        students : state.students
    }
    return newState
}),
on(StudentsStateActions.studentsLoaded, (state, {students}) => {
    const newState : StudentsState ={
        loading : false,
        students : students
    }
    return newState
}),
on(StudentsStateActions.AddStudent, (state, { student: Student }) => {
  return state;
}),
on(StudentsStateActions.EditStudent, (state, { student: Student }) => {
  return state;
}),
on(StudentsStateActions.DeleteStudent, (state, { student: Student }) => {
  return state;
})
);

export const studentsStateFeature = createFeature({
  name: studentsStateFeatureKey,
  reducer,
});

