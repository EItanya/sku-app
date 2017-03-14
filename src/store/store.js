import { combineReducers } from 'redux'
import BusinessReducer from '../reducers/businesses'
import {reducer as FormReducer } from 'redux-form'
import AuthReducer from '../reducers/auth.js'

const rootReducer = combineReducers({
  form: FormReducer,
  businesses: BusinessReducer,
  auth: AuthReducer
});

export default rootReducer
