import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { MaterialModule } from '../shared/material.module';
import { TeachersService } from './services/teachers.service';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer, teachersStateFeatureKey } from './state/teachers-state.reducer';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { TeachersEffects } from './state/teachers-state.effects';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { DeleteTeacherComponent } from './components/delete-teacher/delete-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeachersListComponent,
    TeacherDetailsComponent,
    AddModalComponent,
    EditModalComponent,
    DeleteTeacherComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature(teachersStateFeatureKey, reducer),
    EffectsModule.forFeature([TeachersEffects])
  ],
  providers: [TeachersService],
})
export class TeachersModule { }
