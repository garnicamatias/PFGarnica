import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { loadTeachers, teachersLoaded } from "./teachers-state.actions";
import { Teacher } from "src/app/shared/models/teacher";
import { TeachersService } from "../services/teachers.service";

@Injectable()
export class TeachersEffects{
    getTeachers$ = createEffect(() => {
        return this.actions$.pipe( 
            ofType(loadTeachers),
            concatMap(() => {
                return this.teachers.getTeachers().pipe(
                    map((t : Teacher[]) => teachersLoaded({ teachersObtained : t }))
                )
            })
        )
    });
    // addTeachers$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(AddStudent),
    //         concatMap(({ student }) => {
    //             return this.students.addStudent(student).pipe(
    //                 map((student : Student) => {
    //                     this.snackBar.open(`Estudiante ${student.name} ${student.surname} agregado/a correctamente`, 'Cerrar', {
    //                         duration : 3000
    //                     });
    //                     return loadStudents();
    //                 })
    //             )
    //         })
    //     );
    // });
    // deleteStudent$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(DeleteStudent),
    //         concatMap(({ student }) => {
    //             return this.students.deleteStudent(student).pipe(
    //                 map((student: Student) => {
    //                     this.snackBar.open(`Estudiante ${student.name} ${student.surname} eliminado/a correctamente`, 'Cerrar', {
    //                         duration : 3000
    //                     });
    //                     return loadStudents();
    //                 })
    //             )
    //         })
    //     )
    // });
    
    // editStudent$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(EditStudent),
    //         concatMap(({ student }) => {
    //             return this.students.editStudent(student).pipe(
    //                 map((student: Student) => {
    //                     this.snackBar.open(`Estudiante ${student.name} ${student.surname} editado/a correctamente`, 'Cerrar', {
    //                         duration : 3000
    //                     });
    //                     return loadStudents();
    //                 })
    //             )
    //         })
    //     );
    // });

    constructor(
        private teachers: TeachersService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}