import { browserHistory } from 'react-router'
import Firebase from 'firebase'
import request from 'superagent'
import uuid from 'uuid'
import Keys from '../Data/Keys'


export const BUSINESS_YELP_ADD_TOKEN = "BUSINESS_YELP_ADD_TOKEN"


export function businessYelpGetToken() {
  request
    .post("https://api.yelp.com/oauth2/token")
    .send({grant_type: "client_credentials", client_id: Keys.yelpId, client_secret: Keys.yelpSecret})
    .set('Accept', 'application/json')
    .end(function(err, res){
      if (err){
        console.log(error)
      }
      else {
        console.log(response)
      }
    })
}

export function businessYelpAddToken(token) {
  return {
    type: BUSINESS_YELP_ADD_TOKEN,
    token
  }
}