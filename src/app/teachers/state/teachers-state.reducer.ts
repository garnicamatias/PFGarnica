import { createFeature, createReducer, on } from '@ngrx/store';
import * as TeachersStateActions from './teachers-state.actions';
import { Teacher } from 'src/app/shared/models/teacher';

export const teachersStateFeatureKey = 'teachersState';

export interface TeachersState {
  loading : boolean,
  teachers: Teacher[]
}

export const initialState: TeachersState = {
  loading : false,
  teachers: []
};

export const reducer = createReducer(
  initialState,
  on(TeachersStateActions.loadTeachers, (state) => {
    const newState : TeachersState ={
        loading : true,
        teachers : state.teachers
    }
    return newState
}),
on(TeachersStateActions.teachersLoaded, (state, {teachersObtained}) => {
    const newState : TeachersState ={
        loading : false,
        teachers : teachersObtained
    }
    return newState
}),
on(TeachersStateActions.AddTeacher, (state, { teacher : Teacher }) => {
  return state;
}),
on(TeachersStateActions.EditTeacher, (state, { teacher : Teacher }) => {
  return state;
}),
on(TeachersStateActions.DeleteTeacher, (state, { teacher : Teacher }) => {
  return state;
})
);

export const teachersStateFeature = createFeature({
  name: teachersStateFeatureKey,
  reducer,
});

