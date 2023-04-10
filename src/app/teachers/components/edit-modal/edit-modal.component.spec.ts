import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalComponent } from './edit-modal.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EditModalComponent', () => {
  let component: EditModalComponent;
  let fixture: ComponentFixture<EditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModalComponent ],
      imports: [MaterialModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
