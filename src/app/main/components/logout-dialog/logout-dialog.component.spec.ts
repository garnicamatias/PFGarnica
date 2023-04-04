import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { DeleteDialogComponent } from './logout-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDialogComponent ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        SharedModule
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

    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
