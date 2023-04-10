import { createFeature, createReducer, on } from '@ngrx/store';
import * as SubjectsStateActions from './subjects-state.actions';
import { Subject } from 'src/app/shared/models/subject';

export const subjectsStateFeatureKey = 'subjectsState';


export interface SubjectsState {
    loading : boolean,
    subjects : Subject[]
}

export const initialState: SubjectsState = {
  loading : false,
  subjects : []
};

export const reducer = createReducer(
  initialState,
  on(SubjectsStateActions.loadSubjects, (state) => {
    const newState : SubjectsState ={
        loading : true,
        subjects : state.subjects
    }
    return newState
}),
on(SubjectsStateActions.subjectsLoaded, (state, {subject}) => {
    const newState : SubjectsState ={
        loading : false,
        subjects : subject
    }
    return newState
})
)

export const subjectsStateFeature = createFeature({
  name: subjectsStateFeatureKey,
  reducer,
});

