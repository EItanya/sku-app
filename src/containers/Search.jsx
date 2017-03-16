import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions.js'
import Paper from 'material-ui/Paper'
import AutoComplete from 'material-ui/AutoComplete'
import CircularProgress from 'material-ui/CircularProgress'
import BusinessCard from '../components/BusinessCard.jsx'

import states from '../Data/States.js'

class Search extends React.Component {

  componentWillMount() {
    this.props.searchBusinessAll()
  }

  renderLoading() {
    if (this.props.searchLoading){
      return (
        <div>
          <div className={"LoadingDiv"}>
            <CircularProgress size={80} thickness={5}/>
          </div>
        </div>
      )
    } else {
      return <div/>
    }
  }

  renderSearchError() {
    if (this.props.searchError) {
      return (
        <div>There was an error loading the data, please try again</div>
      )
    } else {
      return <div/>
    }
  }

  render() {
    let { searchError, searchLoading, searchResults } = this.props
    console.log()
    return(
      <div>
        <div className={"SearchBar"}>
          <Paper rounded={false} zDepth={2} className={"PaperSearchBar"}>
            <div className={"OuterSearchBar"}>
              <AutoComplete fullWidth={true} id={"BusinessSearchBar"} dataSource={states}/>
            </div>
          </Paper>
        </div>
          {this.renderSearchError()}
          {this.renderLoading()}
        <div className={"BusinessSearchResults"}>
          {searchResults.map((value) => <BusinessCard key={value.uid} data={value}/>)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchError: state.businessSearch.error,
    searchLoading: state.businessSearch.loading,
    searchResults: state.businessSearch.results
  }
}


export default connect(mapStateToProps, Actions)(Search)