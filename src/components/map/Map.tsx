import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';

import type { CityPlacement, Location } from '../../types/types';

import useMap from '../../hooks/useMap';
import { CityCenter, URL_MARKER_DEFAULT } from '../../const';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityPlacement;
  locations: Location[];
  place?: 'cities' | 'property';
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const Map = ({ city, locations, place = 'cities' }: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      locations.forEach(({ latitude: lat, longitude: lng }) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);

        markers.push(marker);
      });

      const { latitude: lat, longitude: lng,} = CityCenter[city.name];
      map.setView({ lat, lng });

      map.fitBounds([[city.location.latitude, city.location.longitude]], {
        maxZoom: city.location.zoom
      });
    }

    return () => {
      if (map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };
  }, [map, city, locations]);

  return <section className={`${place}__map map`} ref={mapRef} />;
};
