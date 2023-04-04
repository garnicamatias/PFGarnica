import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { LoginStateEffects } from './state/login-state.effects';
import { StoreModule } from '@ngrx/store';
import { loginReducer, loginStateFeatureKey } from './state/login-state.reducer';


@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(loginStateFeatureKey, loginReducer),
    EffectsModule.forFeature([LoginStateEffects])
  ]
})
export class LoginModule { }
