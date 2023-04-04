import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLayoutComponent } from './signup-layout.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupLayoutComponent', () => {
  let component: SignupLayoutComponent;
  let fixture: ComponentFixture<SignupLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupLayoutComponent, SignupFormComponent ],
      imports: [MaterialModule, RouterModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
