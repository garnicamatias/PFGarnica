import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { Observable, Subscription } from 'rxjs';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/users/services/users.service';
import { UsersState } from 'src/app/users/state/users-state.reducer';
import { loadUsersSelector, usersLoadedSelector } from 'src/app/users/state/users-state.selectors';
import { loadUsers } from 'src/app/users/state/users-state.actions';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit{

  dataSource !: MatTableDataSource<User> 
  dataColumns: string[] = ['name', 'email', 'isAdmin', 'actions']
  suscription !: Subscription;

  students!: User[];
  loading$ !: Observable<Boolean>


  constructor(
    private usersService : UsersService,
    private dialog : MatDialog,
    private store : Store<UsersState>
    )
    {
  }
  
  ngOnInit(): void {
    this.loading$ = this.store.select(loadUsersSelector)
    this.store.dispatch(loadUsers());
    this.dataSource = new MatTableDataSource<User>();
    
    this.store.select(usersLoadedSelector).subscribe((usersLoadedSelector)=>{
          this.dataSource.data = usersLoadedSelector
        })

  }


  refresh() {
    this.store.select(usersLoadedSelector).subscribe((usersLoadedSelector)=>{
      this.dataSource.data = usersLoadedSelector
    })
  }

  deleteUserDialog(user : User){
    this.dialog.open(DeleteDialogComponent, { data: user }).beforeClosed().subscribe(()=>{
      this.refresh()
    })
  }

  editUser = (user : User) => {
    this.dialog.open(EditModalComponent, { data: user }).beforeClosed().subscribe(()=>{
      this.refresh()
    })
  }

  openAddModal() {
    this.dialog.open(AddModalComponent).beforeClosed().subscribe(()=>{
      this.refresh()
    })
  }


}

