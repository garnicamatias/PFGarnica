import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { TeachersListComponent } from './teachers-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TeachersListComponent', () => {
  let component: TeachersListComponent;
  let fixture: ComponentFixture<TeachersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersListComponent ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
         {
           provide: MatDialogRef,
           useValue: {}
         }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
