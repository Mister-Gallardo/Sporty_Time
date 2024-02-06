import React, { useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ModalContainer } from '../ModalContainer';
import {
  Box,
  CircularProgress,
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getLocations } from '../../../services/club/service';
import transliterate from '@sindresorhus/transliterate';
import { debounce } from 'lodash-es';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

interface ISelectClubLocationModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}

export const SelectClubLocationModal: React.FC<
  ISelectClubLocationModalProps
> = ({ openState, handleModal }) => {
  const { setValue } = useFormContext();

  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { data, isLoading } = useQuery({
    queryKey: [searchTerm],
    queryFn: () => getLocations(searchTerm),
    enabled: searchTerm !== '',
  });

  const locationOptions = data
    ? data
        .sort((a, b) => a.properties.name.localeCompare(b.properties.name))
        .map((b) => ({
          title: `${b.properties.name} (${b.properties.country})`,
          coordinates: b.geometry.coordinates,
        }))
    : [];

  const delayedQuery = useCallback(
    debounce((query) => setSearchTerm(transliterate(query)), 300),
    [],
  );

  return (
    <ModalContainer
      openState={openState}
      handleModal={() => handleModal(false)}
      headerTitle="Где Вы хотите играть?"
    >
      <Box height="80vh">
        <TextField
          value={currentSearchTerm}
          onChange={(e) => {
            const value = e.target.value;

            // to escape delay on typing
            setCurrentSearchTerm(value);

            delayedQuery(value);
          }}
          autoFocus
          autoComplete="off"
          label="Выбор локации"
          fullWidth
          InputProps={{
            endAdornment: (
              <>
                <InputAdornment position="end">
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                </InputAdornment>
              </>
            ),
            sx: { paddingInline: 2 },
          }}
          sx={{ marginBottom: 2 }}
        />

        <List sx={{ maxHeight: '80vh', overflow: 'auto' }}>
          {locationOptions.map((location, i) => {
            return (
              <React.Fragment key={i}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      const [long, lat] = location.coordinates;
                      setValue('long', long);
                      setValue('lat', lat);

                      setValue('selectedLocation', location.title);
                      handleModal();
                    }}
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Box display="flex" gap={1}>
                      <ListItemIcon sx={{ minWidth: 'unset' }}>
                        <FmdGoodOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={location.title} />
                    </Box>
                    <ListItemIcon sx={{ minWidth: 'unset' }}>
                      <EastRoundedIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
        </List>
      </Box>
    </ModalContainer>
  );
};
