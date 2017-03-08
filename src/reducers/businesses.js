
import { REQUEST_REDDITS } from '../actions/actions';

const initialState =  {
  data: []
};

export default function businesses(state = initialState, action) {
  switch (action.type) {
    case REQUEST_REDDITS:
      return {
        ...state, 
        data: action.payload.body.data.children
      };
    default:
      return state;
  }
}