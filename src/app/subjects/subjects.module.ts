import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsListComponent } from './components/subjects-list/subjects-list.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SubjectsListComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class SubjectsModule { }
