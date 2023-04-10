import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AddModalComponent } from './add-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { StudentsService } from '../../services/students.service';

describe('AddModalComponent', () => {
  let component: AddModalComponent;
  let fixture: ComponentFixture<AddModalComponent>;
  let students: StudentsService;
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


  it('El formulario no se envía si los inputs están vacíos', ()=>{
    const addStudentForm = component.addStudentForm;
    const name = addStudentForm.controls["name"];
    const surname = addStudentForm.controls["surname"];
    const fileNumber = addStudentForm.controls["fileNumber"];
    const age = addStudentForm.controls["age"];
    const isActive = addStudentForm.controls["isActive"];
    const gender = addStudentForm.controls["gender"];
    const adress = addStudentForm.controls["adress"];
    const course = addStudentForm.controls["course"]

    name.setValue('');
    surname.setValue('');
    fileNumber.setValue('');
    age.setValue('');
    isActive.setValue(false);
    gender.setValue('');
    adress.setValue(''),
    course.setValue('')

    const addBtn = fixture.debugElement.query(By.css("#add-btn"));
    addBtn.nativeElement.click();

    fixture.detectChanges();

    expect(addStudentForm.valid).toBeFalse();
  });

  it('El formulario es válido si los inputs están completos con los tipos de datos correspondientes', ()=>{
    const addStudentForm = component.addStudentForm;
    const name = addStudentForm.controls["name"];
    const surname = addStudentForm.controls["surname"];
    const fileNumber = addStudentForm.controls["fileNumber"];
    const age = addStudentForm.controls["age"];
    const isActive = addStudentForm.controls["isActive"];
    const gender = addStudentForm.controls["gender"];
    const adress = addStudentForm.controls["adress"];
    const course = addStudentForm.controls["course"]

    name.setValue('Juan');
    surname.setValue('Gomez');
    fileNumber.setValue(1545);
    age.setValue(45);
    isActive.setValue(false);
    gender.setValue('M');
    adress.setValue('Brasil 222'),
    course.setValue(2)

    const addBtn = fixture.debugElement.query(By.css("#add-btn"));
    addBtn.nativeElement.click();

    fixture.detectChanges();

    expect(addStudentForm.valid).toBeTrue();
  });



});
