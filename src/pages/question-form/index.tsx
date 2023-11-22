import { useState } from 'react';
import { StartQuestioningStep } from './steps/StartQuestioning';
import { Box, Fade } from '@mui/material';
import { QuestioningStep } from './steps/Questioning';
import { ResultsStep } from './steps/Results';
import { getUserInfo } from '../../services/user/service';
import { useQuery } from '@tanstack/react-query';
import { useIsAuthorized } from '../../services/api/hooks';

export function QuestionFormPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  function handleNextStep() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBackStep() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const isAuthorized = useIsAuthorized();

  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: getUserInfo,
    retry: false,
    enabled: isAuthorized,
  });

  const firstName = data?.data.firstname || '';
  const lastName = data?.data.lastname || '';

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
