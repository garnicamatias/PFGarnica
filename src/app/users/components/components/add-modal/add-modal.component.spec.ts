import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AddModalComponent } from './add-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { UsersService } from 'src/app/users/services/users.service';

describe('AddModalComponent', () => {
  let component: AddModalComponent;
  let fixture: ComponentFixture<AddModalComponent>;
  let users: UsersService;
  let httpClientSpy: { get: jasmine.Spy }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalComponent ],
      imports: [
        MatDialogModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule
      ],
      providers: [
         {
           provide: MatDialogRef,
           useValue: {}
         }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
