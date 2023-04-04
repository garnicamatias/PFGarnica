import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/components/home-layout/home-layout.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes : Routes = [

  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeLayoutComponent},

  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
