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



@NgModule({
  declarations: [
    TeachersListComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature(teachersStateFeatureKey, reducer)
  ],
  providers: [TeachersService],
})
export class TeachersModule { }
