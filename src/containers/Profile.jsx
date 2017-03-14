import React from 'react'
import { connect } from 'react-redux'

import BusinessList from '../components/BusinessList.jsx'
import SearchBar from '../components/SearchBar.jsx';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/actions.js';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BusinessList business={ this.props.businesses } />
        <SearchBar onTermChange={ this.props.actions.requestSubreddits} />
      </div>
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
