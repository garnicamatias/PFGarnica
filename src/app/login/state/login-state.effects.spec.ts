import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoginStateEffects } from './login-state.effects';

describe('LoginStateEffects', () => {
  let actions$: Observable<any>;
  let effects: LoginStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LoginStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
