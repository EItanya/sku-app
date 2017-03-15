import { browserHistory } from 'react-router'
import Firebase from 'firebase'

export const ADD_BUSINESS = "ADD_BUSINESS"


export function addBusiness(details) {
  return {
    type: ADD_BUSINESS,
    payload: details
  }
}