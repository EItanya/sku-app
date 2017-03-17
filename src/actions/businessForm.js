import { browserHistory } from 'react-router'
import Firebase from 'firebase'
import uuid from 'uuid'
import request from 'superagent'
import { addBusiness } from './business'


export const BUSINESS_FORM_PLACES_SERVICE = 'BUSINESS_FORM_PLACES_SERVICE'
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
      
      dispatch(addBusinessSuccess())
      dispatch(addBusiness(businessDetails))
      // setTimeout(() => {
      //   browserHistory.push('')
      // }, 3000);
      // browserHistory.push('business')
    })
    .catch(error => {
      console.log(error)
      addBusinessError(error)
    })
  }
}

// export function businessFormGoogleId(id) {
//   return function(dispatch) {
//     request
//       .get("https://maps.googleapis.com/maps/api/place/details/json?placeid="+id+"&key=AIzaSyCJhjZbiAgXndcULhwTutH5lhlzjWBZsOA")
//       .set('Accept', 'application/json')
//       .set('Access-Control-Allow-Origin', '*')
//       .end(function(err, res) {
//         if (err) {
//           console.log("Error getting Google Business")
//         } else {
//           console.log(res)
//         }
//       })
//   }
// }

export function businessFormPlacesService(service) {
  return {
    type: BUSINESS_FORM_PLACES_SERVICE,
    service
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

export function addBusinessSuccess() {
  return {
    type: BUSINESS_FORM_SUCCESS,
  }
}



