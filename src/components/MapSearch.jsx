import React from 'react'
import * as Actions from '../actions/actions.js'
import { GoogleApiWrapper }  from 'google-maps-react'
import { connect } from 'react-redux'
import Map from 'google-maps-react'
import TextField from 'material-ui/TextField'


export class MapSearch extends React.Component {

  componentDidMount() {
    
  }

  mapClicked(mapProps, map, clickEvent) {
    if (clickEvent.placeId) {
      //Make API call and get data about place
      this.props.service.getDetails({placeId: clickEvent.placeId}, function(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(place);
      }
    })
    }

  }

  setupMap(mapProps, map) {
    const {google} = this.props;
    const service = new google.maps.places.PlacesService(map)

    let input = document.getElementById('MapAutocompleteSearch')
    let options = {
      types: ['establishment']
    };

    let autoComplete = new google.maps.places.Autocomplete(input, options);
    autoComplete.addListener('place_changed', () => {
      const selectedPlace = autoComplete.getPlace()
      console.log(selectedPlace)
      let position = new google.maps.LatLng(selectedPlace.geometry.location.lat(), selectedPlace.geometry.location.lng())
      map.setCenter(position)
    })

    this.props.businessFormPlacesService(service)
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>  
        <TextField 
          id={"MapAutocompleteSearch"}
          style={{width: "50%"}}
          multiLine={true}
          rows={2}
        />
        <Map google={this.props.google} zoom={14}
          className={'GoogleMap'}
          onClick={(mapProps, map, clickEvent) => this.mapClicked(mapProps, map, clickEvent)}
          onReady={(mapProps, map) => this.setupMap(mapProps, map)}
        >
        </Map>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    service: state.businessForm.service
  }
}


// export default  GoogleApiWrapper({
//   apiKey: "AIzaSyCQFws-AHyw8PtIdPVJB9Dq2x8pFr-XTKs"
// })(MapSearch) 
const WrappedMap =  GoogleApiWrapper({
  apiKey: "AIzaSyDC-bFqX3FfBJt7Hdcr6xuZAOoX6CbPAXQ"
})(MapSearch)

export default connect(mapStateToProps, Actions)(WrappedMap)