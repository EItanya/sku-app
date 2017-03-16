import { 
  BUSINESS_SEARCH_ERROR,
  BUSINESS_SEARCH_LOADING,
  BUSINESS_SEARCH_SUCCESS,  } from '../actions/actions';

const initialState = {
  results: [],
  success: null,
  searchVal: null,
  error: null,
  loading: false
}


export default function businessSearch(state = initialState, action) {
  switch(action.type){
    case BUSINESS_SEARCH_SUCCESS: 
      return {
        ...state,
        results: [...action.payload],
        loading: false
      }
    case BUSINESS_SEARCH_ERROR: 
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case BUSINESS_SEARCH_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}