import React from 'react';
import { ModalContainer } from './ModalContainer';
import { Box, Button } from '@mui/material';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import { useFormContext } from 'react-hook-form';
import { Sport } from '../../types';

interface ISelectSportModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}

export const SelectSportModal: React.FC<ISelectSportModalProps> = ({
  openState,
  handleModal,
}) => {
  const { setValue, getValues } = useFormContext();

  const onClick = (sport: Sport) => {
    setValue('sport', sport);
    localStorage.setItem('clubsFilters', JSON.stringify(getValues()));

    handleModal();
  };

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Выбрать вид спорта"
      initialBreakpoint={0.5}
    >
      <Box display="flex" flexDirection="column" gap={1}>
        <Button
          startIcon={<SportsTennisIcon />}
          sx={{ color: '#333', display: 'flex', justifyContent: 'start' }}
          fullWidth
          onClick={() => onClick(Sport.PADEL)}
        >
          Падел
        </Button>
        <Button
          startIcon={<SportsBaseballIcon />}
          sx={{ color: '#333', display: 'flex', justifyContent: 'start' }}
          fullWidth
          onClick={() => onClick(Sport.TENNIS)}
        >
          Теннис
        </Button>
        <Button
          startIcon={<SportsCricketIcon />}
          sx={{ color: '#333', display: 'flex', justifyContent: 'start' }}
          fullWidth
          onClick={() => onClick(Sport.PICKLEBALL)}
        >
          Пиклбол
        </Button>
      </Box>
    </ModalContainer>
  );
};