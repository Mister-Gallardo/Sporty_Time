import React from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { SelectClubLocationModal } from '../SelectClubLocationModal';
import { ModalContainer } from '../../ModalContainer';
import useToggle from '../../../../hooks/useToggle';
import { PlayLocation } from './PlayLocationModal';
import { Box, IconButton } from '@mui/material';
import { SportType } from './SportTypeModal';
import { PlayDate } from './PlayDateModal';
import { AskForLevel } from './AskForLevel';
import useSearchParams from '../../../../hooks/useSearchParams';

interface IFilterMatchesModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  onApply: () => void;
}

export const FilterMatchesModal: React.FC<IFilterMatchesModalProps> = ({
  openState,
  handleModal,
  onApply,
}) => {
  const [openSelectLocation, setOpenSelectLocation] = useToggle();

  const [getIndex, setIndex] = useSearchParams();
  const currentStep = getIndex('step') ? +getIndex('step')! : 1;

  const handleStep = (step: number) =>
    setIndex('step', `${currentStep + step}`);

  const modalTitle =
    currentStep === 1
      ? 'Вид спорта'
      : currentStep === 2
      ? 'Какой у Вас уровень'
      : currentStep === 3
      ? 'Где Вы хотите играть?'
      : 'Когда Вы хотите играть?';

  const handleSelectLocation = () => {
    handleModal();
    setOpenSelectLocation();
  };

  const backButton = () => (
    <IconButton onClick={() => handleStep(-1)}>
      <ArrowBackRoundedIcon />
    </IconButton>
  );

  return (
    <>
      <SelectClubLocationModal
        openState={openSelectLocation}
        handleModal={handleSelectLocation}
        handleClose={() => {
          handleModal(true);
          setOpenSelectLocation(false);
        }}
      />

      <ModalContainer
        openState={openState}
        handleModal={handleModal}
        headerTitle={modalTitle}
        headerButton={currentStep > 1 ? backButton() : null}
      >
        <Box height="100%" display="flex" flexDirection="column">
          {currentStep === 1 && <SportType handleStep={handleStep} />}
          {currentStep === 2 && <AskForLevel handleStep={handleStep} />}
          {currentStep === 3 && (
            <PlayLocation
              handleStep={handleStep}
              handleSelectLocation={handleSelectLocation}
            />
          )}
          {currentStep === 4 && (
            <PlayDate handleStep={handleStep} onApply={onApply} />
          )}
        </Box>
      </ModalContainer>
    </>
  );
};
