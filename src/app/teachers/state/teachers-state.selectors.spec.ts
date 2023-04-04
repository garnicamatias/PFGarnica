import * as fromTeachersState from './teachers-state.reducer';
import { selectTeachersState } from './teachers-state.selectors';

describe('TeachersState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTeachersState({
      [fromTeachersState.teachersStateFeatureKey]: {}
    });

  });
});
