import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Student } from 'src/app/shared/models/student';
import { StudentState } from 'src/app/shared/models/student.state';
import { ActivatedRoute } from '@angular/router';
import { studentsLoadedSelector } from '../../state/students-state.selectors';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  studentFilter !:Student[]
  student !: Student
  id !: string | null
  course !: string | null
  courseNumber !: number

  constructor(
    private store : Store<StudentState>,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id')
   this.course = this.route.snapshot.paramMap.get('course')
    if(this.course  && this.course !== 'all'){
      this.courseNumber = +this.course
      this.store.select(studentsLoadedSelector).subscribe(
        (studentsLoadedSelector) => {
          this.studentFilter = studentsLoadedSelector.filter(student => (student.id === this.id && student.course == this.courseNumber))
          this.student = this.studentFilter[0]
        }
       )
    } else {
      this.store.select(studentsLoadedSelector).subscribe(
        (studentsLoadedSelector) => {
          this.studentFilter = studentsLoadedSelector.filter(student => (student.id === this.id))
          this.student = this.studentFilter[0]
        })
    }
   
  }

}
