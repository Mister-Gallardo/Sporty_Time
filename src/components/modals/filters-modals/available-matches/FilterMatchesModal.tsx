import React from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useSearchParam } from '../../../../hooks/useSearchParams';
import { ModalContainer } from '../../ModalContainer';
import { Box, IconButton } from '@mui/material';
import { PlayLocation } from './PlayLocation';
import { AskForLevel } from './AskForLevel';
import { SportType } from './SportType';
import { PlayDate } from './PlayDate';
import { usePlayerProfile } from '../../../../services/api/hooks';
import { useFormContext } from 'react-hook-form';
import { ESport } from '../../../../services/matches/interface';

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

  const [player] = usePlayerProfile();
  const { watch } = useFormContext();
  const { sport } = watch();

  //if user has rating in selected sport - skip 2 step
  const handleStep = (step: number) => {
    if (player) {
      const ratingPadel = player.ratingPadel && sport === ESport.PADEL;
      const ratingTennis = player.ratingTennis && sport === ESport.TENNIS;
      const ratingPickleball =
        player.ratingPickleball && sport === ESport.PICKLEBALL;

      const isRating = ratingPadel || ratingTennis || ratingPickleball;

      const isFirstStep = currentStep === 1;

      if (ratingPadel && isFirstStep) {
        setQ('3');
      } else if (ratingTennis && isFirstStep) {
        setQ('3');
      } else if (ratingPickleball && isFirstStep) {
        setQ('3');
      } else if (isRating && currentStep === 3 && step === -1) {
        setQ('1');
      } else {
        setQ(String(currentStep + step));
      }
    }
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
        {currentStep === 4 && <PlayDate handleModal={handleModal} />}
      </Box>
    </ModalContainer>
  );
};
