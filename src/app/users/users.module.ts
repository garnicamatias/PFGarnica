import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersService } from './services/users.service';
import { AddModalComponent } from './components/components/add-modal/add-modal.component';
import { EditModalComponent } from './components/components/edit-modal/edit-modal.component';
import { UsersTableComponent } from './components/components/users-table/users-table.component';
import { DeleteDialogComponent } from './components/components/delete-dialog/delete-dialog.component';
import { UsersRoutingModule } from './users-routing.module';
import { reducer, usersStateFeatureKey } from './state/users-state.reducer';
import { UsersEffects } from './state/users-state.effects';



@NgModule({
  declarations: [
    AddModalComponent,
    EditModalComponent,
    UsersTableComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    StoreModule.forFeature(usersStateFeatureKey, reducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersService]
})
export class UsersModule { }
