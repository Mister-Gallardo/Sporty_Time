import { useState } from 'react';
import { StartQuestioningStep } from './steps/StartQuestioning';
import { Box, Fade } from '@mui/material';
import { QuestioningStep } from './steps/Questioning';
import { ResultsStep } from './steps/Results';
import { useUserInfo, useUserProfile } from '../../services/api/hooks';

export function QuestionFormPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  function handleBackStep() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const user = useUserInfo();
  const player = useUserProfile();
  const firstName = user?.firstname || '';
  const lastName = user?.lastname || '';

  return (
    <>
      {activeStep === 1 ? (
        <Fade in>
          <Box sx={{ height: '100%' }}>
            <StartQuestioningStep
              firstName={firstName}
              handleNextStep={() => {
                const playerHasRating =
                  player?.ratingPadel ||
                  player?.ratingTennis ||
                  player?.ratingPickleball;
                if (playerHasRating) setActiveStep(3);
                else setActiveStep(2);
              }}
            />
          </Box>
        </Fade>
      ) : activeStep === 2 ? (
        <QuestioningStep
          handleBackStep={handleBackStep}
          handleNextStep={() => setActiveStep(3)}
        />
      ) : (
        <Fade in>
          <Box sx={{ height: '100%' }}>
            <ResultsStep firstName={firstName} lastName={lastName} />
          </Box>
        </Fade>
      )}
    </>
  );
}
