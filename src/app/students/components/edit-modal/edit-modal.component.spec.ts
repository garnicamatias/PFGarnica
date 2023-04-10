import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { EditModalComponent } from './edit-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';

describe('EditModalComponent', () => {
  let component: EditModalComponent;
  let fixture: ComponentFixture<EditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModalComponent ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
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

    fixture = TestBed.createComponent(EditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
