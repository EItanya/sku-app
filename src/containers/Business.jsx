import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions.js'
import Paper from 'material-ui/Paper'


class Business extends React.Component {
  render() {
    return (
      <div>
        <Paper className={"BusinessFormPaper"} zDepth={1}>
          <Card
            expandable={false}
            className={"LoginCard"}
            containerStyle={{marginTop:"50px"}}
          >
            <CardHeader
              title="Add Business"
              className={"LoginCardHeader"}
            />
          </Card> 
        </Paper>
      </div>
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