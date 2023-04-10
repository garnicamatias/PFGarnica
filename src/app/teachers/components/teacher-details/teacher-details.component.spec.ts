import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetailsComponent } from './teacher-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material.module';

describe('TeacherDetailsComponent', () => {
  let component: TeacherDetailsComponent;
  let fixture: ComponentFixture<TeacherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [ TeacherDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
