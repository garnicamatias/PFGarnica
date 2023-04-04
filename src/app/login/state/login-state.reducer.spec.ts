import { loginReducer, initialState } from './login-state.reducer';

describe('LoginState Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = loginReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
