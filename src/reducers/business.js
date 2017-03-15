import { ADD_BUSINESS } from '../actions/actions';

const initialState =  {
  uid: null,
  city: null,
  name: null,
  streetAddress: null,
  state: null,
  zip: null
};

export default function businesses(state = initialState, action) {
  switch (action.type) {
    case ADD_BUSINESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}