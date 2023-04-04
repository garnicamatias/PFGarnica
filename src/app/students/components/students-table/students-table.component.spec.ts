import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { StudentsTableComponent } from './students-table.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

describe('StudentsTableComponent', () => {
  let component: StudentsTableComponent;
  let fixture: ComponentFixture<StudentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsTableComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatTableModule
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

    fixture = TestBed.createComponent(StudentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
