import { browserHistory } from 'react-router'
import Firebase from 'firebase'
import uuid from 'uuid'
import { addBusiness } from './business'



export const ADD_BUSINESS_ERROR = 'ADD_BUSINESS_ERROR'
export const ADD_BUSINESS_SUCCESS = 'ADD_BUSINESS_SUCCESS'
// var database = Firebase.database()

export function addBusinessFirebase(details) {
  return function(dispatch) {
    var id = uuid.v4()
    var businessDetails = {
      uid: id,
      city: details.city,
      name: details.name,
      streetAddress: details.streetAddress,
      state: details.state,
      zip: details.zip
    }

    Firebase.database().ref('businesses/' + id).set(businessDetails)
    .then(response => {
      dispatch(addBusiness(businessDetails))
      // browserHistory.push('business')
    })
    .catch(error => {
      console.log(error)
      addBusinessError(error)
    })
  }
}

export function addBusinessError(error) {
  return {
    type: ADD_BUSINESS_ERROR,
    payload: error
  }
}

export function addBusinessSuccess(id) {
  return {
    type: ADD_BUSINESS_SUCCESS,
  }
}



