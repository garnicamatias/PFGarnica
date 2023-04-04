import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from '../sidebar/sidebar.component';

import { MainLayoutComponent } from './main-layout.component';
import { ContentAreaComponent } from '../content-area/content-area.component';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayoutComponent, SidebarComponent, ContentAreaComponent, MatSidenavContainer, MatNavList ],
      imports: [MaterialModule, RouterModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
