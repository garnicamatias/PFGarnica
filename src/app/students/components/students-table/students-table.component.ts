import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from 'src/app/students/services/students.service';
import { Student } from '../../../shared/models/student';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Store } from '@ngrx/store';
import { loadStudents, studentsLoaded } from '../../state/students-state.actions';
import { loadStudentsSelector, studentsLoadedSelector } from '../../state/students-state.selectors';
import { StudentsState } from '../../state/students-state.reducer';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit{

  dataSource !: MatTableDataSource<Student> 
  dataColumns: string[] = ['name','course', 'fileNumber', 'isActive', 'gender','actions']
  suscription !: Subscription;
  course !: string | null
  courseNumber !: number
  students!: Student[];
  loading$ !: Observable<Boolean>


  constructor(
    private studentsService : StudentsService,
    private dialog : MatDialog,
    private store : Store<StudentsState>,
    private route : ActivatedRoute
    )
    {
  }
  
  ngOnInit(): void {
    this.loading$ = this.store.select(loadStudentsSelector)
    this.store.dispatch(loadStudents());
    this.dataSource = new MatTableDataSource<Student>();
    this.course = this.route.snapshot.paramMap.get('course')
    if(this.course && this.course !== 'all'){
      this.courseNumber = +this.course
      this.store.select(studentsLoadedSelector).subscribe((studentsLoadedSelector)=>{
        this.dataSource.data = studentsLoadedSelector.filter(students =>
          {return students.course == this.courseNumber})
        })
    } else {
      this.store.select(studentsLoadedSelector).subscribe((studentsLoadedSelector)=>{
        this.dataSource.data = studentsLoadedSelector
        })
    }
    
  }


  refresh() {
    if(this.course && this.course !== 'all'){
      this.courseNumber = +this.course
      this.store.select(studentsLoadedSelector).subscribe((studentsLoadedSelector)=>{
        this.dataSource.data = studentsLoadedSelector.filter(students =>
          {return students.course == this.courseNumber})
        })
    } else {
      this.store.select(studentsLoadedSelector).subscribe((studentsLoadedSelector)=>{
        this.dataSource.data = studentsLoadedSelector
        })
    }
  }

  deleteStudentDialog(student : Student){
    this.dialog.open(DeleteDialogComponent, { data: student }).beforeClosed().subscribe(()=>{
      this.refresh()
    })
  }

  editStudent = (student : Student) => {
    this.dialog.open(EditModalComponent, { data: student }).beforeClosed().subscribe(()=>{
      this.refresh()
    })
  }

  openAddModal() {
    this.dialog.open(AddModalComponent).beforeClosed().subscribe(()=>{
      this.refresh()
    })
  }


}

