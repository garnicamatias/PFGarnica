import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupLayoutComponent } from './components/signup-layout/signup-layout.component';

const routes: Routes = [
  {path:'', component:SignupLayoutComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
