
import React from 'react'
import SelectField from 'material-ui/SelectField'

const FormSelectField = ({input, label, type, meta : {touched, error}, children, ...custom}) => (
  <div>
    <SelectField
      hintText={label}
      floatingLabelText={label}
      {...input}
      {...custom}
      onChange={(event, index, value) => input.onChange(value)}
      className={"PaperFormItem"}
      type={type}
      errorText={touched && error}
      children={children}
      maxHeight={300}
    />
  </div>
)

export default FormSelectField