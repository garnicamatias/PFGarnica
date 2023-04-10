import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialogComponent } from './error-dialog.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { MatDialogRef } from '@angular/material/dialog';

describe('ErrorDialogComponent', () => {
  let component: ErrorDialogComponent;
  let fixture: ComponentFixture<ErrorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDialogComponent ],
      imports: [MaterialModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
