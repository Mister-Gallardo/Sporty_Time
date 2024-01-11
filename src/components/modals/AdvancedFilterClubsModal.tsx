import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ModalContainer } from './ModalContainer';
import {
  Box,
  Button,
  Divider,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { ModalContentContainer } from '../atoms/ModalContentContainer';
// import { DistanceSlider } from '../molecules/DistanceSlider';

interface IAdvancedFilterClubsModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  onApply: () => void;
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  '&.MuiToggleButtonGroup-root': {
    gap: 8,
  },
  '& .MuiToggleButtonGroup-grouped': {
    textTransform: 'initial',
    color: '#000',
    fontSize: 12,
    lineHeight: 1.2,
    padding: '5px 10px',

    '&.Mui-selected': {
      backgroundColor: '#0e2432',
      color: '#fff',
    },
    '&:not(:first-of-type)': {
      border: '1px solid #eee',
      borderRadius: 50,
    },
    '&:first-of-type': {
      borderRadius: 50,
    },
  },
}));

export const AdvancedFilterClubsModal: React.FC<
  IAdvancedFilterClubsModalProps
> = ({ openState, handleModal, onApply }) => {
  const [sortBy, setSortBy] = useState('relevance');

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Расширенный фильтр"
    >
      <Box display="flex" flexDirection="column" gap={2} mb={10}>
        <Box display="flex" gap={2} justifyContent="space-between">
          <Typography fontWeight={600}>
            Показывать клубы без свободных кортов
          </Typography>
          <Switch />
        </Box>

        <Divider />

        <ModalContentContainer title="Сортировать по">
          <StyledToggleButtonGroup
            color="primary"
            value={sortBy}
            exclusive
            onChange={(_, value) => setSortBy(value)}
            aria-label="Sort by"
          >
            <ToggleButton value="relevance">Актуальность</ToggleButton>
            <ToggleButton value="distance">Расстояние</ToggleButton>
            <ToggleButton value="price">Цена</ToggleButton>
          </StyledToggleButtonGroup>
        </ModalContentContainer>

        <Divider />

        <ModalContentContainer title="Расстояние">
          <Typography fontWeight={600}>0m-0km</Typography>
          <Typography color="gray">
            Выберите максимальное расстояние для поиска
          </Typography>

          {/* <DistanceSlider /> */}
        </ModalContentContainer>

        <Divider />

        <ModalContentContainer title="Длительность игры">
          <StyledToggleButtonGroup color="primary" aria-label="Duration">
            <ToggleButton value="60">60 минут</ToggleButton>
            <ToggleButton value="90">90 минут</ToggleButton>
            <ToggleButton value="120">120 минут</ToggleButton>
          </StyledToggleButtonGroup>
        </ModalContentContainer>

        <Divider />

        <ModalContentContainer title="Тип">
          <StyledToggleButtonGroup color="primary" aria-label="Type">
            <ToggleButton value="indoor">Внутри</ToggleButton>
            <ToggleButton value="outdoor">Снаружи</ToggleButton>
            <ToggleButton value="roofedOutdoor">С крышей снаружи</ToggleButton>
          </StyledToggleButtonGroup>
        </ModalContentContainer>

        <Divider />

        <ModalContentContainer title="Дополнения">
          <StyledToggleButtonGroup color="primary" aria-label="Features">
            <ToggleButton value="wall">Wall</ToggleButton>
            <ToggleButton value="crystal">Crystal</ToggleButton>
            <ToggleButton value="panoramic">Panoramic</ToggleButton>
          </StyledToggleButtonGroup>
        </ModalContentContainer>

        <Divider />

        <ModalContentContainer title="Размер">
          <StyledToggleButtonGroup color="primary" aria-label="Size">
            <ToggleButton value="single">Одиночный</ToggleButton>
            <ToggleButton value="double">Двойной</ToggleButton>
          </StyledToggleButtonGroup>
        </ModalContentContainer>
      </Box>
      <Box
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        bgcolor="#fff"
        p={2}
        boxShadow="0 3px 6px 8px #0000000a"
      >
        <Button
          onClick={onApply}
          sx={{
            backgroundColor: '#0e2432',
            color: '#fff',
            borderRadius: 20,
            py: 1,
          }}
          fullWidth
        >
          Применить
        </Button>
      </Box>
    </ModalContainer>
  );
};
