import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SubjectsStateEffects } from './subjects-state.effects';

describe('SubjectsStateEffects', () => {
  let actions$: Observable<any>;
  let effects: SubjectsStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
