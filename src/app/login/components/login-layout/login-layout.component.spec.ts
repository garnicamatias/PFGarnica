import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayoutComponent } from './login-layout.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginLayoutComponent', () => {
  let component: LoginLayoutComponent;
  let fixture: ComponentFixture<LoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLayoutComponent, LoginFormComponent ],
      imports: [MaterialModule, RouterModule, RouterTestingModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [AuthenticationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
