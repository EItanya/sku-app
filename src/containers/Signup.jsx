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


class Signup extends React.Component {


  handleFormSubmit = (values) => {
    this.props.signUpUser(values)
  };

  renderAuthError() {
    if (this.props.authenticationError) {
      return <div>{ this.props.authenticationError }</div>;
    }
    return <div></div>;
  }

  render() {
    return (
      <div style={{marginTop: "50px"}}>
        <Paper className={"LoginPaper"} zDepth={1}>
          <Card
            expandable={false}
            className={"LoginCard"}
            containerStyle={{marginTop:"50px"}}
          >
            <CardHeader
              title="Login"
              className={"LoginCardHeader"}
            />
          </Card> 
          {this.renderAuthError()} 
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name="email" type="email" component={FormTextField} label="Email"/>
            <Field name="password" type="password" component={FormTextField}  label="Password"/>
            <Field name="passwordConfirmation" type="password" component={FormTextField} label="Password Confirmation"/>
            <div>
            <RaisedButton className={"SubmitButton"} type='submit' action="submit" label={"Register"} />
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
  form: 'signup',
  validate
})(Signup));

