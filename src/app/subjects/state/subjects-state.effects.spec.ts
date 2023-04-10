import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SubjectsStateEffects } from './subjects-state.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubjectsService } from '../services/subjects.service';

describe('SubjectsStateEffects', () => {
  let actions$: Observable<any>;
  let effects: SubjectsStateEffects;
  let subjectsService : SubjectsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [
        SubjectsStateEffects,
        provideMockActions(() => actions$)
      ]
    });
  
    effects = TestBed.inject(SubjectsStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
