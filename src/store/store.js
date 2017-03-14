import { combineReducers } from 'redux'
import BusinessReducer from '../reducers/businesses'
import {reducer as FormReducer } from 'redux-form'
import AuthReducer from '../reducers/auth.js'
import NavReducer from '../reducers/nav.js'

const rootReducer = combineReducers({
  form: FormReducer,
  businesses: BusinessReducer,
  auth: AuthReducer,
  nav: NavReducer
});

export default rootReducer
