import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'

class Header extends React.Component {

  render() {
    let loginLink = <Link to="/login"/>;

    return (
      <header>
        <AppBar
          title="Sku-Yelp"
          iconElementRight={<IconButton><Menu /></IconButton>}
          showMenuIconButton={false}
          iconElementRight={<FlatButton href="login" label="Login" ></FlatButton>}
        />
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Header);