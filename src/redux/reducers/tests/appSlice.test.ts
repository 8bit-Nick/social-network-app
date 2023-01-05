import appSlice, { initializedSuccess } from '../appSlice';

const state = {
  initialized: false,
};

test('initialized must be successful', () => {
  const newState = appSlice(state, initializedSuccess());
  expect(newState.initialized).toBeTruthy();
});
