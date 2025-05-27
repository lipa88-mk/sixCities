import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import type { CityPlacement, Location } from '../../types/types';
import useMap from '../../hooks/useMap';
import { CityCenter, URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityPlacement;
  locations: (Location & { id?: number })[];
  place?: 'cities' | 'property';
  activeOffer?: null | number;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const Map = ({ city, locations, place = 'cities', activeOffer }: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      locations.forEach(({id, latitude: lat, longitude: lng }) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(activeOffer === id ? currentCustomIcon : defaultCustomIcon)
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
  }, [map, city, locations, activeOffer]);

  return <section className={`${place}__map map`} ref={mapRef} />;
};
