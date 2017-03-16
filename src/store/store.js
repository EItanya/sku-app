import { combineReducers } from 'redux'
import BusinessReducer from '../reducers/business.js'
import BusinessSearchReducer from '../reducers/businessSearch.js'
import BusinessFormReducer from '../reducers/businessForm.js'
import {reducer as FormReducer } from 'redux-form'
import AuthReducer from '../reducers/auth.js'
import NavReducer from '../reducers/nav'

const rootReducer = combineReducers({
  form: FormReducer,
  businessForm: BusinessFormReducer,
  businessSearch: BusinessSearchReducer,
  business: BusinessReducer,
  auth: AuthReducer,
  nav: NavReducer
});

export default rootReducer
