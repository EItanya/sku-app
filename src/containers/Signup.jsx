import React from 'react'
import { connect } from 'react-redux'


class Signup extends React.Component {
  render() {
    return (
      <div>Signup</div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Signup);