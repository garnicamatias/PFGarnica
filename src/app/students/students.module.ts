import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { StudentsRoutingModule } from './students-routing.module';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsService } from './services/students.service';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { CoreModule } from '../core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { reducer, studentsStateFeatureKey } from './state/students-state.reducer';
import { StudentsEffects } from './state/students-state.effects';



@NgModule({
  declarations: [
    AddModalComponent,
    EditModalComponent,
    StudentsTableComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    StoreModule.forFeature(studentsStateFeatureKey, reducer),
    EffectsModule.forFeature([StudentsEffects])
  ],
  providers: [StudentsService]
})
export class StudentsModule { }
