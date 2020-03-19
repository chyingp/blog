// MapView.js
import PropTypes from 'prop-types';
import React from 'react';
import {requireNativeComponent} from 'react-native';

class MapView extends React.Component {
  render() {
    return <RNTMap {...this.props} />;
  }
}

MapView.propTypes = {
  /**
   * A Boolean value that determines whether the user may use pinch
   * gestures to zoom in and out of the map.
   */
  zoomEnabled: PropTypes.bool,

  /**
   * The region to be displayed by the map.
   *
   * The region is defined by the center coordinates and the span of
   * coordinates to display.
   */
  region: PropTypes.shape({
    /**
     * Coordinates for the center of the map.
     */
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,

    /**
     * Distance between the minimum and the maximum latitude/longitude
     * to be displayed.
     */
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }),  
};

var RNTMap = requireNativeComponent('RNTMap', MapView);

module.exports = MapView;