import { browserHistory } from 'react-router'
import Firebase from 'firebase'
import uuid from 'uuid'
import { addBusiness } from './business'



export const BUSINESS_FORM_ERROR = 'BUSINESS_FORM_ERROR'
export const BUSINESS_FORM_SUCCESS = 'BUSINESS_FORM_SUCCESS'
export const BUSINESS_FORM_RATING = 'BUSINESS_FORM_RATING'


export function addBusinessFirebase(details, userId, rating) {
  return function(dispatch) {
    var id = uuid.v4()
    var businessDetails = {
      uid: id,
      city: details.city,
      name: details.name,
      streetAddress: details.streetAddress,
      state: details.state,
      zip: details.zip,
      dateAdded: new Date(),
      addedBy: userId,
      ratings: {}
    }
    if (rating) {
      businessDetails.ratings[userId] = rating
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


export function addBusinessRating(rating) {
  return {
    type: BUSINESS_FORM_RATING,
    rating
  }
}

export function addBusinessError(error) {
  return {
    type: BUSINESS_FORM_ERROR,
    payload: error
  }
}

export function addBusinessSuccess(id) {
  return {
    type: BUSINESS_FORM_SUCCESS,
  }
}



