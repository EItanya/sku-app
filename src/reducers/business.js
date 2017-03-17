import { ADD_BUSINESS } from '../actions/actions';

const initialState =  {
  uid: null,
  city: "",
  name: "",
  streetAddress: "",
  state: "",
  zip: "",
  
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