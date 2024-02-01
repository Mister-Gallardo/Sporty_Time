import React from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useSearchParam } from '../../../../hooks/useSearchParams';
import { ModalContainer } from '../../ModalContainer';
import { Box, IconButton } from '@mui/material';
import { PlayLocation } from './PlayLocation';
import { AskForLevel } from './AskForLevel';
import { SportType } from './SportType';
import { PlayDate } from './PlayDate';

interface IFilterMatchesModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}

export const FilterMatchesModal: React.FC<IFilterMatchesModalProps> = ({
  openState,
  handleModal,
}) => {
  const [q, setQ] = useSearchParam('q');
  const currentStep = Number(q) || 1;

  const handleStep = (step?: number) => {
    // if (currentStep === 4) return handleModal(false);
    if (step) setQ(String(currentStep + step));
  };

  const modalTitle =
    currentStep === 1
      ? 'Вид спорта'
      : currentStep === 2
      ? 'Какой у Вас уровень'
      : currentStep === 3
      ? 'Где Вы хотите играть?'
      : 'Когда Вы хотите играть?';

  const backButton = () => (
    <IconButton onClick={() => handleStep(-1)}>
      <ArrowBackRoundedIcon />
    </IconButton>
  );

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle={modalTitle}
      headerButton={currentStep > 1 ? backButton() : null}
    >
      <Box height="100%" display="flex" flexDirection="column">
        {currentStep === 1 && <SportType handleStep={handleStep} />}
        {currentStep === 2 && (
          <AskForLevel handleStep={handleStep} handleModal={handleModal} />
        )}
        {currentStep === 3 && <PlayLocation handleStep={handleStep} />}
        {currentStep === 4 && (
          <PlayDate handleStep={handleStep} handleModal={handleModal} />
        )}
      </Box>
    </ModalContainer>
  );
};
