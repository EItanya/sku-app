import { NAV_MENU_CLOSE, NAV_MENU_OPEN } from '../actions/actions.js'

const intialState = {
  open: true,
  currentPage: 'Hello'
}

export default function nav(state = intialState, action) {
  switch(action.type) {
    case NAV_MENU_CLOSE:
      return {
        ...state,
        open: false
      }
    case NAV_MENU_OPEN:
      return {
        ...state,
        open: true
      }
    default: 
      return state
  }
}


