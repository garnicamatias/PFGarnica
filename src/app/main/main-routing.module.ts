import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { TeachersService } from 'src/app/teachers/services/teachers.service';
import { SessionGuard } from '../core/guards/session.guard';
import { AdminGuard } from '../core/guards/admin.guard';


const routes : Routes = [
  {path:'', canActivate:[SessionGuard], canLoad:[SessionGuard] ,canActivateChild: [SessionGuard], component: MainLayoutComponent,
  children: [
    {path: 'students',canActivate:[AdminGuard] , loadChildren: () => import('../students/students.module').then(m => m.StudentsModule)},
    {path: 'teachers', loadChildren: () => import('../teachers/teachers.module').then(m => m.TeachersModule)},
  ]
}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
