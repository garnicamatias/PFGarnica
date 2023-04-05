import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { AddUser, DeleteUser, EditUser, loadUsers, usersLoaded } from "./users-state.actions";
import { User } from "src/app/shared/models/user";
import { UsersService } from "../services/users.service";

@Injectable()
export class UsersEffects{
    getUsers$ = createEffect(() => {
        return this.actions$.pipe( 
            ofType(loadUsers),
            concatMap(() => {
                return this.users.getUsers().pipe(
                    map((u : User[]) => usersLoaded({ users: u }))
                )
            })
        )
    });
    addUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AddUser),
            concatMap(({ user }) => {
                return this.users.addUser(user).pipe(
                    map((user : User) => {
                        this.snackBar.open(`Usuario/a ${user.name} ${user.surname} agregado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadUsers();
                    })
                )
            })
        );
    });
    deleteUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(DeleteUser),
            concatMap(({ user }) => {
                return this.users.deleteUser(user).pipe(
                    map((user: User) => {
                        this.snackBar.open(`Usuario/a ${user.name} ${user.surname} eliminado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadUsers();
                    })
                )
            })
        )
    });
    
    editUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EditUser),
            concatMap(({ user }) => {
                return this.users.editUser(user).pipe(
                    map((user: User) => {
                        this.snackBar.open(`Usuario/a ${user.name} ${user.surname} editado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadUsers();
                    })
                )
            })
        );
    });

    constructor(
        private users: UsersService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}