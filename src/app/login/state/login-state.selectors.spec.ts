import * as fromLoginState from './login-state.reducer';
import { selectLoginState } from './login-state.selectors';

describe('LoginState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLoginState({
      [fromLoginState.loginStateFeatureKey]: {}
    });
;
  });
});
