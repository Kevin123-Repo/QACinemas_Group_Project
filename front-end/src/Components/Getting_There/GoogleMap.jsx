import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class GoogleMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} style={{ height: '500px', width: '500px' }} center={{ lat: 41.3851, lng: 2.1734 }}>

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