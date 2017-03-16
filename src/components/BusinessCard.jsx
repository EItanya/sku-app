import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions.js'
import Paper from 'material-ui/Paper'
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { Rating } from 'material-ui-rating'


class BusinessCard extends React.Component {

  componentWillMount() {

  }

  render() {
    let { data } = this.props
    return (
      <div className={"BusinessCard"}>
        <Card>
          <CardHeader
            title={data.name}
            subtitle={data.city}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            Temp stuff for now
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
            <Rating value={0 || data.avgRating} max={5}
              onChange={(value) => console.log(value)}
            />
          </CardActions>
        </Card>
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


export default connect(mapStateToProps, Actions)(BusinessCard)