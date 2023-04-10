import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalComponent } from './add-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddModalComponent', () => {
  let component: AddModalComponent;
  let fixture: ComponentFixture<AddModalComponent>;

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
         },
         { provide: MAT_DIALOG_DATA, useValue: {} },
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
