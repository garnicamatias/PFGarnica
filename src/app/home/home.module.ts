import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { RouterModule } from '@angular/router';
import { HomeContentComponent } from './components/home-content/home-content.component';



@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
