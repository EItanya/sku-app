import React from 'react';
import './styles/app.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as Actions from './actions/actions.js';
import SearchBar from './components/SearchBar.jsx';
import Header from './components/Header.jsx'
import BusinessList from './components/BusinessList.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    businesses: state.businesses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
