import { browserHistory } from 'react-router'
import Firebase from 'firebase'


export const ADD_BUSINESS = 'ADD_BUSINESS'

// var database = Firebase.database()

export function addBusiness(details) {
  return function(dispatch) {
    console.log(details)
  }
}

