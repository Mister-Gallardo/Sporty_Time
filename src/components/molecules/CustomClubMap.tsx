import {
  MapLibreMap,
  MlFillExtrusionLayer,
  useMap,
} from '@mapcomponents/react-maplibre';
import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';

export const CustomClubMap = () => {
  // const { clubId } = useParams<{ clubId: string }>();

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['club', clubId],
  //   queryFn: () => getClubById(Number(clubId), {}),
  // });

  const mapHook = useMap({ mapId: 'map' });
  const markerRef = useRef<maplibregl.Marker>();
  const mapOptions = {
    zoom: 11,
    style: 'https://wms.wheregroup.com/tileserver/style/osm-bright.json',
    center: [27.567444, 53.893009] as [number, number],
  };

  useEffect(() => {
    const map = mapHook?.map;
    if (!map) return;

    markerRef.current = new maplibregl.Marker()
      .setLngLat([27.567444, 53.893009])
      .addTo(map as any);

    return () => {
      mapHook.cleanup();
    };
  }, [mapHook.map]);

  return (
    <>
      <Box width="100%" height={400} position="relative" overflow="hidden">
        <MapLibreMap
          options={mapOptions}
          mapId="map"
          style={{ width: '100%', height: '400px' }}
        />
        <MlFillExtrusionLayer mapId="map" />
      </Box>
    </>
  );
};
