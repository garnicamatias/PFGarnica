import * as fromStudentsState from './students-state.reducer';
import { selectStudentsState } from './students-state.selectors';

describe('StudentsState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStudentsState({
      [fromStudentsState.studentsStateFeatureKey]: {}
    });

    // expect(result).toEqual();
  });
});
