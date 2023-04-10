import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDetailsComponent } from './subject-details.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})],
    });
  });

describe('SubjectDetailsComponent', () => {
  let component: SubjectDetailsComponent;
  let fixture: ComponentFixture<SubjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectDetailsComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
