import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { StudentsService } from "../services/students.service";
import { Student } from "src/app/shared/models/student";
import { AddStudent, DeleteStudent, EditStudent, loadStudents, studentsLoaded } from "./students-state.actions";

@Injectable()
export class StudentsEffects{
    getStudents$ = createEffect(() => {
        return this.actions$.pipe( 
            ofType(loadStudents),
            concatMap(() => {
                return this.students.getStudents().pipe(
                    map((s : Student[]) => studentsLoaded({ students: s }))
                )
            })
        )
    });
    addStudent$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AddStudent),
            concatMap(({ student }) => {
                return this.students.addStudent(student).pipe(
                    map((student : Student) => {
                        this.snackBar.open(`Estudiante ${student.name} ${student.surname} agregado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadStudents();
                    })
                )
            })
        );
    });
    deleteStudent$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(DeleteStudent),
            concatMap(({ student }) => {
                return this.students.deleteStudent(student).pipe(
                    map((student: Student) => {
                        this.snackBar.open(`Estudiante ${student.name} ${student.surname} eliminado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadStudents();
                    })
                )
            })
        )
    });
    
    editStudent$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EditStudent),
            concatMap(({ student }) => {
                return this.students.editStudent(student).pipe(
                    map((student: Student) => {
                        this.snackBar.open(`Estudiante ${student.name} ${student.surname} editado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadStudents();
                    })
                )
            })
        );
    });

    constructor(
        private students: StudentsService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}