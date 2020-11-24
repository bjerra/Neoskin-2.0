import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {StyledMap} from './Map.styled'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <StyledMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ""}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </StyledMap>
    );
  }
}

export default Map;