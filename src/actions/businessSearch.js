import { browserHistory } from 'react-router'
import Firebase from 'firebase'
import uuid from 'uuid'
import _ from 'underscore'
import { addBusiness } from './business'


export const BUSINESS_SEARCH_LOADING = 'BUSINESS_SEARCH_LOADING'
export const BUSINESS_SEARCH_COMPLETE = "BUSINESS_SEARCH_COMPLETE"
export const BUSINESS_SEARCH_ERROR = 'BUSINESS_SEARCH_ERROR'
export const BUSINESS_SEARCH_SUCCESS = 'BUSINESS_SEARCH_SUCCESS'


export function searchBusinessAll() {
  return function(dispatch) {
    dispatch(businessSearchLoading())
    Firebase.database().ref('/businesses/').once('value')
    .then(snapshot => {
      var payload = Object.entries(snapshot.val()).map(function(val) {
        return {
          ...val[1],
          avgRating: calculateRating(val[1].ratings) 
        }
      })
      dispatch(businessSearchSuccess(payload))
      // browserHistory.push('business')
    })
    .catch(error => {
      console.log(error)
      businessSearchError(error)
    })
  }
}


function calculateRating(businessRatings) {
  var sum = 0;
  var amount = 0;
  _.each(businessRatings, function(value,key) {
    sum += value  
    amount +=1
  })
  return sum/amount
}

export function businessSearchLoading() {
  return {
    type: BUSINESS_SEARCH_LOADING
  }
}


export function businessSearchError(error) {
  return {
    type: BUSINESS_SEARCH_ERROR,
    payload: error
  }
}

export function businessSearchSuccess(payload) {
  return {
    type: BUSINESS_SEARCH_SUCCESS,
    payload,
  }
}



