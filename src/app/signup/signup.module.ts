import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupLayoutComponent } from './components/signup-layout/signup-layout.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { RouterModule } from '@angular/router';
import { SignupRoutingModule } from './signup-routing.module';



@NgModule({
  declarations: [
    SignupLayoutComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SignupRoutingModule
  ],

})
export class SignupModule { }
