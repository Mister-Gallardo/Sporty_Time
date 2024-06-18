import { MapLibreMap, useMap } from '@mapcomponents/react-maplibre';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getClubById } from '../../services/club/service';
import { LoadingCircle } from '../atoms/LoadingCircle';

export const CustomClubMap = () => {
  const { clubId } = useParams<{ clubId: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['club', clubId],
    queryFn: () => getClubById(Number(clubId), {}),
  });

  const mapHook = useMap({ mapId: 'map' });
  const clubCoordinates = data?.location?.coordinates;

  useEffect(() => {
    const map = mapHook?.map;
    if (!map || !clubCoordinates) return;

    new maplibregl.Marker().setLngLat(clubCoordinates).addTo(map as any);

    return () => {
      mapHook.cleanup();
    };
  }, [mapHook.map]);

  if (isLoading) return <LoadingCircle />;

  return (
    <Box width="100%" height={400} position="relative" overflow="hidden">
      <MapLibreMap
        options={{
          zoom: 11,
          style: 'https://wms.wheregroup.com/tileserver/style/osm-bright.json',
          center: clubCoordinates,
        }}
        mapId="map"
        style={{ width: '100%', height: '400px' }}
      />
    </Box>
  );
};
