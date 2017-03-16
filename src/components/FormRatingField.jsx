import React from 'react'
import SelectField from 'material-ui/SelectField'
import { Rating } from 'material-ui-rating'

const FormRatingField = ({input, meta : {touched, error}, ...custom}) => (
  <div>
    <Rating
      {...input}
      {...custom}
      onChange={(value) => input.onChange(value)}
      className={"PaperFormItem"}
      errorText={touched && error}
    />

  </div>
)

export default FormRatingField