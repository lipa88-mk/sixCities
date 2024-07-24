import { useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';

import type { CityPlacement } from '../types/types';

const useMap = (
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityPlacement
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    let instance = map;

    if (mapRef.current !== null && map === null) {
      instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);
    }

    return () => {
      if (instance) {
        instance.remove();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapRef, city]);

  return map;
};

export default useMap;
