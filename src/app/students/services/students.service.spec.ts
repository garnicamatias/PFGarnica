import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentsService } from './students.service';
import { Student } from '../../shared/models/student';
import { of } from 'rxjs';

describe('StudentsService', () => {
  let service: StudentsService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new StudentsService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    });


  it("StudentService devuelve un array de datos mockeados", (done: DoneFn)=>{
    const data: Student[] = [
 {
  "name": "Matias ",
  "surname": "Garnica",
  "fileNumber": 1234,
  "age": 15,
  "isActive": true,
  "gender": "M",
  "subject": "Matemática",
  "id": "1"
 },
 {
  "name": "Lau",
  "surname": "Espinosa",
  "fileNumber": 1235,
  "age": 14,
  "isActive": true,
  "gender": "F",
  "subject": "Diseño",
  "id": "2"
 },
 {
  "name": "Ricardo",
  "surname": "Gimenez",
  "fileNumber": 1545,
  "age": 16,
  "isActive": true,
  "gender": "X",
  "subject": "Inglés",
  "id": "3"
 },
 {
  "name": "Luis",
  "surname": "Guzman",
  "fileNumber": 1456,
  "age": 13,
  "isActive": true,
  "gender": "NaN",
  "subject": "Física",
  "id": "4"
 },
 {
  "name": "Carlos",
  "surname": "Aguilar",
  "fileNumber": 1545,
  "age": 15,
  "isActive": false,
  "gender": "M",
  "subject": "Geografía",
  "id": "5"
 }
]
     httpClientSpy.get.and.returnValue(of(data));

     service.getStudents().subscribe((students : Student[]) => {
       expect(students).toEqual(data);
       done();
    });
  })
});

  

