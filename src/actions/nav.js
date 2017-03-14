import { browserHistory } from 'react-router'

export const NAV_MENU_CLOSE = 'NAV_MENU_CLOSE'
export const NAV_MENU_OPEN = 'NAV_MENU_OPEN'

export function navMenuOpen() {
  return {
    type: NAV_MENU_OPEN
  }
}

export function navManuClose() {
  return {
    type: NAC_MENU_CLOSE
  }
}

