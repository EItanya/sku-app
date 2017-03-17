import { ADD_BUSINESS, 
  BUSINESS_FORM_RATING, 
  BUSINESS_FORM_PLACES_SERVICE,
  BUSINESS_FORM_SUCCESS } from '../actions/actions';

const initialState = {
  error: null,
  success: false,
  rating: null,
  googleBusiness: null,
  service: null
}

export default function businessForm(state = initialState, action) {
  switch(action.type){
    case BUSINESS_FORM_RATING:
      return {
        ...state,
        rating: action.rating
      }
    case BUSINESS_FORM_SUCCESS:
      return {
        ...state,
        success: true
      }
    case BUSINESS_FORM_PLACES_SERVICE:
      return {
        ...state,
        service: action.service
      }
    default :
      return {
        ...state
      }
  }
}