import * as fromStudentsState from './students-state.reducer';
import { selectStudentsStateState } from './students-state.selectors';

describe('StudentsState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStudentsStateState({
      [fromStudentsState.studentsStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
