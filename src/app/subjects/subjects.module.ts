import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsListComponent } from './components/subjects-list/subjects-list.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { SubjectsStateEffects } from './state/subjects-state.effects';
import { StoreModule } from '@ngrx/store';
import { reducer, subjectsStateFeatureKey } from './state/subjects-state.reducer';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';
import { teachersStateFeatureKey } from '../teachers/state/teachers-state.reducer';



@NgModule({
  declarations: [
    SubjectsListComponent,
    SubjectDetailsComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature(subjectsStateFeatureKey, reducer),
    EffectsModule.forFeature([SubjectsStateEffects]),
  ]
})
export class SubjectsModule { }
