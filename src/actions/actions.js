import request from 'superagent';
import { browserHistory } from 'react-router'
import Firebase from 'firebase'


const API_URL = "https://www.reddit.com/r/writingprompts/top.json?limit=8"

const config = {
    apiKey: "AIzaSyBF3t6cUxL9XVDHg5gthzisJL7NFDZhOjg",
    authDomain: "skuapp-505b0.firebaseapp.com",
    databaseURL: "https://skuapp-505b0.firebaseio.com",
    storageBucket: "skuapp-505b0.appspot.com",
    messagingSenderId: "957874115979"
  };

Firebase.initializeApp(config)


export * from './auth.js'
export * from './businessForm.js'
export * from './nav.js'
export * from './business.js'

export function requestSubreddits(term = null) {
  const data = request.get(`${API_URL}`)
  console.log(term);
  return {
    type: REQUEST_REDDITS,
    payload: data
  }
}
