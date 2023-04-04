import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatNavList } from '@angular/material/list';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/layout/components/navbar/navbar.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterTestingModule } from "@angular/router/testing";


import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent, MatSidenavContainer, MatNavList, NavbarComponent],
      imports: [MaterialModule, RouterModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
