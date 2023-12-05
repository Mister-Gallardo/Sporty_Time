import { useEffect, useState } from 'react';
import { StartQuestioningStep } from './steps/StartQuestioning';
import { Box, Fade } from '@mui/material';
import { QuestioningStep } from './steps/Questioning';
import { ResultsStep } from './steps/Results';
import { useUserInfo, useUserProfile } from '../../services/api/hooks';
import { useHistory } from 'react-router';

export function QuestionFormPage() {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState<number>(1);

  function handleNextStep() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBackStep() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const user = useUserInfo();
  const player = useUserProfile();

  useEffect(() => {
    const playerHasRating =
      player?.ratingPadel || player?.ratingTennis || player?.ratingPickleball;
    if (playerHasRating) {
      history.push('/');
      history.go(0);
    } else {
      return;
    }
  }, [user]);

  const firstName = user?.firstname || '';
  const lastName = user?.lastname || '';

  return (
    <>
      {activeStep === 1 ? (
        <Fade in>
          <Box sx={{ height: '100%' }}>
            <StartQuestioningStep
              firstName={firstName}
              handleNextStep={handleNextStep}
            />
          </Box>
        </Fade>
      ) : activeStep === 2 ? (
        <QuestioningStep
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
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
