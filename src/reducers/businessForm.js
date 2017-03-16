import { ADD_BUSINESS, BUSINESS_FORM_RATING } from '../actions/actions';

const initialState = {
  error: null,
  success: null,
  rating: null
}

export default function businessForm(state = initialState, action) {
  switch(action.type){
    case BUSINESS_FORM_RATING:
      return {
        ...state,
        rating: action.rating
      }
    default :
      return {
        ...state
      }
  }
}