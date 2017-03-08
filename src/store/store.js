import { combineReducers } from 'redux'
import BusinessReducer from '../reducers/businesses'

const rootReducer = combineReducers({
  businesses: BusinessReducer
});

export default rootReducer
