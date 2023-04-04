import { ActionReducerMap } from "@ngrx/store";
import { StudentState } from "src/app/shared/models/student.state";
import { TeacherState } from "./shared/models/teacher.state";

export interface AppState{
    students : StudentState
}

export interface AppState2{
    teachers : TeacherState
}
