import React, { useEffect, useState } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { SelectClubLocationModal } from '../SelectClubLocationModal';
import { ModalContainer } from '../../ModalContainer';
import useToggle from '../../../../hooks/useToggle';
import { PlayLocation } from './PlayLocationModal';
import { Box, IconButton } from '@mui/material';
import { SportType } from './SportTypeModal';
import { PlayDate } from './PlayDateModal';
import { usePlayerProfile } from '../../../../services/api/hooks';
import { AskForLevel } from './AskForLevel';

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

  const [activeModal, setActiveModal] = useState<number>(4);
  const handleStep = (step: number) => setActiveModal((prev) => prev + step);

  const modalTitle =
    activeModal === 1
      ? 'Вид спорта'
      : activeModal === 2
      ? 'Какой у Вас уровень'
      : activeModal === 3
      ? 'Где Вы хотите играть?'
      : 'Когда Вы хотите играть?';

  const user = usePlayerProfile();

  useEffect(() => {
    //check for some rating. If exist  - set sport as default
  }, [user]);

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
        headerButton={activeModal > 1 ? backButton() : null}
      >
        <Box height="100%" display="flex" flexDirection="column">
          {activeModal === 1 && <SportType handleStep={handleStep} />}
          {activeModal === 2 && <AskForLevel handleStep={handleStep} />}
          {activeModal === 3 && (
            <PlayLocation
              handleStep={handleStep}
              handleSelectLocation={handleSelectLocation}
            />
          )}
          {activeModal === 4 && (
            <PlayDate handleStep={handleStep} onApply={onApply} />
          )}
        </Box>
      </ModalContainer>
    </>
  );
};
