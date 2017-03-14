
import React from 'react'
import TextField from 'material-ui/TextField'

const FormTextField = ({input, label, type, meta : {touched, error}}) => (
  <div>
    <TextField
      hintText={label}
      floatingLabelText={label}
      {...input}
      className={"PaperFormItem"}
      type={type}
      errorText={touched && error}
    />
  </div>
)

export default FormTextField