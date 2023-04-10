import * as fromSubjectsState from './subjects-state.reducer';
import { selectSubjectsStateState } from './subjects-state.selectors';

describe('SubjectsState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSubjectsStateState({
      [fromSubjectsState.subjectsStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
