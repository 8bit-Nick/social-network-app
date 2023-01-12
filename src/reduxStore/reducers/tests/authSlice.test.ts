import { IAuth } from '../../../types/auth.interface';
import authSlice, { setAuthUserData } from '../authSlice';

let state: IAuth;

const id = 7;
const email = 'test@mail.com';
const login = 'test login';
const isAuth = true;

state = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const newState = authSlice(
  state,
  setAuthUserData({ id, email, login, isAuth })
);

describe('setAuthUserData testing', () => {
  test('User id must be 7', () => {
    expect(newState.id).toBe(7);
  });
  test('User email must be "test@mail.com"', () => {
    expect(newState.email).toBe('test@mail.com');
  });
  test('User login must be "test login"', () => {
    expect(newState.login).toBe('test login');
  });
  test('User isAuth must be true', () => {
    expect(newState.isAuth).toBeTruthy();
  });
});
