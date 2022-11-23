import appReducer, { initializedSuccess } from '../appReducer';

const state = {
  initialized: false,
};

test('initialized must be successful', () => {
  const newState = appReducer(state, initializedSuccess());
  expect(newState.initialized).toBeTruthy();
});
