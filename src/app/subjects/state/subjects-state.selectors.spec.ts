import * as fromSubjectsState from './subjects-state.reducer';
import { selectSubjectsState } from './subjects-state.selectors';

describe('SubjectsState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSubjectsState({
      [fromSubjectsState.subjectsStateFeatureKey]: {}
    });

    // expect(result).toEqual({});
  });
});
