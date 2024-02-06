import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ModalContainer } from '../../ModalContainer';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { ModalContentContainer } from '../../../atoms/ModalContentContainer';

interface IAdvancedFilterAvailableMatchesModalProps {
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

export const AdvancedFilterAvailableMatchesModal: React.FC<
  IAdvancedFilterAvailableMatchesModalProps
> = ({ openState, handleModal, onApply }) => {
  const [sortBy, setSortBy] = useState('recent');

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Расширенный фильтр"
    >
      <Box display="flex" flexDirection="column" gap={2} mb={10}>
        <FormGroup>
          <FormControlLabel
            control={<Switch />}
            labelPlacement="start"
            label="Только матчи вашего уровня"
            sx={{ marginLeft: 0, justifyContent: 'space-between' }}
          />
          <FormControlLabel
            control={<Switch />}
            labelPlacement="start"
            label="Полные матчи"
            sx={{ marginLeft: 0, justifyContent: 'space-between' }}
          />
          <FormControlLabel
            control={<Switch />}
            labelPlacement="start"
            label="Показать недоступные клубы"
            sx={{ marginLeft: 0, justifyContent: 'space-between' }}
          />
        </FormGroup>

        <Divider />

        <ModalContentContainer title="Сортировать по">
          <StyledToggleButtonGroup
            color="primary"
            value={sortBy}
            exclusive
            onChange={(_, value) => setSortBy(value)}
            aria-label="Sort by"
          >
            <ToggleButton value="recent">Более ранние</ToggleButton>
            <ToggleButton value="players">Кол-во игроков</ToggleButton>
            <ToggleButton value="nearest">Ближайшие</ToggleButton>
          </StyledToggleButtonGroup>
        </ModalContentContainer>

        <Divider />

        <ModalContentContainer title="Играть с">
          <FormGroup>
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="Только мужчины"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="Только женщины"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="Мужчина и женщина в каждой команде"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="Любые игроки"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
          </FormGroup>
        </ModalContentContainer>
        <Divider />
        <ModalContentContainer title="Тип">
          <FormGroup>
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="Внутри"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="Снаружи"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="С крышей снаружи"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
          </FormGroup>
        </ModalContentContainer>
        <Divider />
        <ModalContentContainer title="Дополнения">
          <FormGroup>
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="Wall"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="Crystal"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="Panoramic"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
          </FormGroup>
        </ModalContentContainer>
        <Divider />
        <ModalContentContainer title="Размер">
          <FormGroup>
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="Одиночный"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox />}
              label="Двойной"
              sx={{ marginLeft: 0, justifyContent: 'space-between' }}
            />
          </FormGroup>
        </ModalContentContainer>
      </Box>
      <Box
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        bgcolor="#fff"
        p={2}
        borderTop="1px solid #eee"
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
