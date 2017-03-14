import request from 'superagent';
import { browserHistory } from 'react-router'
import Firebase from 'firebase'

export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';


export function signUpUser(credentials) {
  return function(dispatch) {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        //Code to update user in the DB Outside of Authentication
        Firebase.database().ref('users/' + response.uid).set({
          email: response.email,
          organization: credentials.organization
        })
        .then(res => {
          dispatch(authUser(response.email));
          browserHistory.push('/profile');
        })
        .catch(error => {
          console.log(error);
          dispatch(authError(error));
        })
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
        console.log(response)
        dispatch(authUser(response.email));
        browserHistory.push('/profile');
      })
      .catch(error => {
        dispatch(authError(error));
      });
  }
}

export function verifyAuth() {
  return function (dispatch) {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser(user.email));
      } else {
        dispatch(signOutUser());
      }
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

export function authUser(email) {
  return {
    type: AUTH_USER,
    email
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}