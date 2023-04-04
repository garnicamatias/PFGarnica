import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    MainLayoutComponent,
    ContentAreaComponent, 
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
