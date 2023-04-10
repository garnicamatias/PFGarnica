import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsListComponent } from './components/subjects-list/subjects-list.component';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';

const routes: Routes = [
  {path: '', component: SubjectsListComponent},
  {path: ':name', component: SubjectDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }