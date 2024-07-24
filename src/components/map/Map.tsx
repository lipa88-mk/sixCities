import {useRef, useEffect} from 'react';
import { Icon, Marker } from 'leaflet';

import type { CityPlacement, Location } from '../../types/types';

import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT } from '../../const';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityPlacement;
  locations: Location[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = ({ city, locations }: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      locations.forEach(({ latitude: lat, longitude: lng }) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, locations]);

  return <section className="cities__map map" id='mymap' ref={mapRef} />;
};

export default Map;
