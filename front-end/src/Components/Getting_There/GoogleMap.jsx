import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class GoogleMap extends Component {
  render() {
    return (
      <Map className="map-div" google={this.props.google} zoom={14} style={{ height: '390px', width: '550px'}} initialCenter={{ lat: 53.804451, lng: -1.583100 }}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>

          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyANUQHGLTfhnLDvarmrMHibkG-YkNV3PM8")
})(GoogleMap)