import React, { useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {

  const mapRef = useRef(null);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
