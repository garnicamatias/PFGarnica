import * as fromStudentsState from './users-state.reducer';
import { selectUsersState } from './users-state.selectors';

describe('StudentsState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUsersState({
      [fromStudentsState.usersStateFeatureKey]: {}
    });

  });
});
