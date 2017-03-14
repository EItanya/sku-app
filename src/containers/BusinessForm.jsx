import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions.js'
import { Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import  Paper  from 'material-ui/Paper'
import FormTextField from '../components/FormTextField.jsx'



const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter a password confirmation.";
  }

  if (values.password !== values.passwordConfirmation ) {
    errors.password = 'Passwords do not match';
  }

  return errors;
};


class BusinessForm extends React.Component {


  handleFormSubmit = (values) => {
    this.props.addBusiness(values)
  };

  renderSaveError() {
    if (this.props.authenticationError) {
      return <div>{ this.props.authenticationError }</div>;
    }
    return <div></div>;
  }

  render() {
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
            <Field name="name" type="name" component={FormTextField} label="Business Name"/>
            <Field name="streetAddress" type="text" component={FormTextField}  label="Street Address"/>
            <Field name="city" type="text" component={FormTextField} label="City"/>
            <Field name="state" type="text" component={FormTextField} label="State"/>
            <Field name="zip" type="number" component={FormTextField} label="Zip Code"/>
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

