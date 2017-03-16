import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions.js'
import Paper from 'material-ui/Paper'


class Business extends React.Component {
  render() {
    return (
      <div>This is a temp</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchError: state.businessSearch.error,
    searchLoading: state.businessSearch.loading
  }
}


export default connect(mapStateToProps, Actions)(Business)