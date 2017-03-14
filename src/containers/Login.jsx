import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions.js'
import { Field, reduxForm } from 'redux-form'
import { Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import  Paper  from 'material-ui/Paper'
import styles from '../styles/app.css'
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

  return errors
}

class Login extends React.Component {
  
  
  handleFormSubmit = (values) => {
    this.props.signInUser(values);
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
            <div>
            <RaisedButton className={"SubmitButton"} type='submit' action="submit" label={"Login"} />
            <RaisedButton className={"SubmitButton"} label={"Register"} href="signup"/>
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
  form: 'login',
  validate
})(Login));
