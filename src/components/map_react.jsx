import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FLATS from '../../data/flats.js';

const Marker = ({ text }) => <div>{text}</div>;

class MapReact extends Component {
  static defaultProps = {
    center: {
      // lat: 48.8534,
      // lng: 2.3488
      lat: FLATS[0].lat,
      lng: FLATS[0].lng
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <div className="marker">
          <Marker
            lat={this.props.selectFlat.lat}
            lng={this.props.selectFlat.lng}
            text={this.props.selectFlat.price}
          />
        </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapReact;
