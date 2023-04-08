import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: ':course', component: StudentsTableComponent},
  {path: ':course/:id', component: StudentDetailComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
