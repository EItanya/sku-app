import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions.js'
import AppBar from 'material-ui/AppBar'
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'




class Header extends React.Component {

  

  handleSignout() {
    this.props.signOutUser();
  }

  handleNav(link) {
    browserHistory.push(link);
  }

  toggleMenu = () => {
    if(!this.props.navOpen) {
      this.props.navMenuOpen()
    } else {
      this.props.navMenuClose()
    }
  }



  loginButton = () => {
    return (
      <FlatButton label="Login" onTouchTap={() => this.handleNav('login')} ></FlatButton>
    )
  }

  NavMenu = () => {
    return (
      <IconMenu
        iconButtonElement={<IconButton><Menu /></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      > 
        <MenuItem primaryText="Profile" onTouchTap={() => this.handleNav('profile')}/>
        <MenuItem primaryText="Add Business" onTouchTap={() => this.handleNav('add')}/>
        <MenuItem primaryText="Search Businesses" onTouchTap={() => this.handleNav('search')}/>
        <Divider/>
        <MenuItem primaryText="Sign Out" onTouchTap={() => this.handleSignout()}/>

      </IconMenu>
    )
  }


  render() {

    return (
      <header>
        <AppBar
          title="Sku-Yelp"
          showMenuIconButton={false}
          iconElementRight={this.props.authenticated ? this.NavMenu(): this.loginButton()}
          onTitleTouchTap={() => this.handleNav('/')}
        />
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    navOpen: state.nav.open
  }
}

export default connect(mapStateToProps, Actions)(Header);