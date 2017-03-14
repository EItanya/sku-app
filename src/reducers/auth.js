import { AUTH_USER, SIGN_OUT_USER, AUTH_ERROR } from '../actions/actions';

const initialState =  {
  email: null,
  authenticated: false,
  error: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
        error: null,
        email: action.email
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        error: null,
        email: null
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload.message
      };
    default:
      return state;
  }
}