import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { AddTeacher, DeleteTeacher, EditTeacher, loadTeachers, teachersLoaded } from "./teachers-state.actions";
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
    addTeachers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AddTeacher),
            concatMap(({ teacher }) => {
                return this.teachers.addTeacher(teacher).pipe(
                    map((teacher : Teacher) => {
                        this.snackBar.open(`Docente ${teacher.name} ${teacher.surname} agregado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadTeachers();
                    })
                )
            })
        );
    });
    deleteTeacher$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(DeleteTeacher),
            concatMap(({ teacher }) => {
                return this.teachers.deleteTeacher(teacher).pipe(
                    map((teacher: Teacher) => {
                        this.snackBar.open(`Docente ${teacher.name} ${teacher.surname} eliminado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadTeachers();
                    })
                )
            })
        )
    });
    
    editTeacher$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EditTeacher),
            concatMap(({ teacher }) => {
                return this.teachers.editTeacher(teacher).pipe(
                    map((teacher: Teacher) => {
                        this.snackBar.open(`Docente ${teacher.name} ${teacher.surname} editado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadTeachers();
                    })
                )
            })
        );
    });

    constructor(
        private teachers: TeachersService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}