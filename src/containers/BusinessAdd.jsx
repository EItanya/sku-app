import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions.js'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import  Paper  from 'material-ui/Paper'
import Snackbar from 'material-ui/Snackbar';
import BusinessForm from '../components/BusinessForm.jsx'
import WrappedMap from '../components/MapSearch.jsx'


class BusinessAdd extends React.Component {

  render() {
    var stateId = 1
    return (
      <div style={{marginTop: "50px"}}>
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
          <Tabs>
            <Tab label="Map">
              <WrappedMap/>
            </Tab>
            <Tab label="Manual">
              <BusinessForm/>
            </Tab>
          </Tabs>
        </Paper>
        <Snackbar
          open={this.props.saveSuccess}
          message="Business Saved"
          autoHideDuration={3000}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error,
    userId: state.auth.uid,
    rating: state.businessForm.rating,
    saveSuccess: state.businessForm.success
  }
}

export default connect(mapStateToProps, Actions)(BusinessAdd);

