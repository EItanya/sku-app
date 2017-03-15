import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions.js'
import { Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import  Paper  from 'material-ui/Paper'
import FormTextField from '../components/FormTextField.jsx'
import FormSelectField from '../components/FormSelectField.jsx'
import states from '../Data/States.js'



const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.name) {
    errors.name = "Please enter The name of the Business.";
  }

  if (!values.streetAddress) {
    errors.streetAddress = "Please enter the Street Address";
  }

  if (!values.city) {
    errors.city = "Please enter a City.";
  }

  if (!values.state) {
    errors.state = "Please enter a State.";
  }

  if (!values.zip) {
    errors.zip = "Please enter a Zip Code.";
  } 
  // else if (!isNaN(values.zip) && len(values.zip) != 5) {
  //   errors.zip = "Zip Code is invalid"
  // }

  return errors;
};


class BusinessForm extends React.Component {


  handleFormSubmit = (values) => {
    this.props.addBusinessFirebase(values)
  };

  renderSaveError() {
    if (this.props.authenticationError) {
      return <div>{ this.props.authenticationError }</div>;
    }
    return <div></div>;
  }

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
          {this.renderSaveError()} 
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name="name" type="name" component={FormTextField} label="Name of Business/Organization"/>
            <Field name="streetAddress" type="text" component={FormTextField}  label="Street Address"/>
            <Field name="city" type="text" component={FormTextField} label="City"/>
            <Field name="state" component={FormSelectField} label="State">
              {states.map((state) => <MenuItem key={stateId++} value={state} primaryText={state}/>)}
            </Field>
            <Field name="zip" type="text" component={FormTextField} label="Zip Code"/>
            <div>
            <RaisedButton className={"SubmitButton"} type='submit' action="submit" label={"Submit"} />
            </div>
          </form>
          <div>
            
          </div>
        </Paper>
              
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  }
}

export default connect(mapStateToProps, Actions)(reduxForm({
  form: 'addBusiness',
  validate
})(BusinessForm));

