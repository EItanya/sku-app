import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions.js'
import AppBar from 'material-ui/AppBar'
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'

class Header extends React.Component {

  handleSignout() {
    this.props.signOutUser();
  }

  renderAuthButton() {
    if (!this.props.authenticated) 
    {
      return (
        <FlatButton href="login" label="Login" ></FlatButton>
      )
    }
    else 
    {
      return (
        <FlatButton label="Logout" onClick={() => this.handleSignout()} ></FlatButton>
      )
    }
  }


  render() {
    let loginLink = <Link to="/login"/>;

    return (
      <header>
        <AppBar
          title="Sku-Yelp"
          iconElementRight={<IconButton><Menu /></IconButton>}
          showMenuIconButton={false}
          iconElementRight={this.renderAuthButton()}
        />
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, Actions)(Header);