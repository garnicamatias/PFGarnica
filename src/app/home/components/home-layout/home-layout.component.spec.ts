import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HomeLayoutComponent } from './home-layout.component';
import { HomeContentComponent } from '../home-content/home-content.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLayoutComponent, HomeContentComponent ],
      imports: [MaterialModule, RouterModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
