import request from 'superagent';
import { browserHistory } from 'react-router'
import Firebase from 'firebase'

export const REQUEST_REDDITS = 'REQUEST_REDDITS';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

const API_URL = "https://www.reddit.com/r/writingprompts/top.json?limit=8"

const config = {
    apiKey: "AIzaSyBF3t6cUxL9XVDHg5gthzisJL7NFDZhOjg",
    authDomain: "skuapp-505b0.firebaseapp.com",
    databaseURL: "https://skuapp-505b0.firebaseio.com",
    storageBucket: "skuapp-505b0.appspot.com",
    messagingSenderId: "957874115979"
  };

Firebase.initializeApp(config)


export function requestSubreddits(term = null) {
  const data = request.get(`${API_URL}`)
  console.log(term);
  return {
    type: REQUEST_REDDITS,
    payload: data
  }
}


export function signUpUser(credentials) {
  return function(dispatch) {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/search');
      })
      .catch(error => {
        console.log(error);
        dispatch(authError(error));
      });
  }
}

export function signInUser(credentials) {
  return function(dispatch) {
    Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/search');
      })
      .catch(error => {
        dispatch(authError(error));
      });
  }
}




export function signOutUser()
{
  browserHistory.push('/');
  return {
    type: SIGN_OUT_USER
  }
}

export function authUser() {
  return {
    type: AUTH_USER
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}