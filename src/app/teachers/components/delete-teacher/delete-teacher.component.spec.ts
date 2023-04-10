import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTeacherComponent } from './delete-teacher.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CompleteNamePipe } from 'src/app/shared/pipes/complete-name.pipe';

describe('DeleteTeacherComponent', () => {
  let component: DeleteTeacherComponent;
  let fixture: ComponentFixture<DeleteTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTeacherComponent, CompleteNamePipe ],
      imports: [MaterialModule, HttpClientTestingModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
