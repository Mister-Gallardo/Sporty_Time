import { useState } from 'react';
import { IonHeader, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { QuestionsStepStep } from './steps/QuestionsStep';
import { ChooseYourSport } from './steps/ChooseYourSport';
import { useUserInfo } from '../../services/api/hooks';
import { LevelingStep } from './steps/LevelingStep';
import { Box, Button, Fade } from '@mui/material';
import { ResultsStep } from './steps/Results';

export function QuestionFormPage() {
  const isMobile = isPlatform('mobile');

  const [activeStep, setActiveStep] = useState<number>(0);

  const user = useUserInfo();
  const firstName = user?.firstname || '';
  const lastName = user?.lastname || '';

  const handleStep = (step: number) => setActiveStep((prev) => prev + step);

  return (
    <>
      {activeStep === 0 ? (
        <Fade in>
          <Box>
            <ChooseYourSport firstName={firstName} handleStep={handleStep} />
          </Box>
        </Fade>
      ) : activeStep === 1 || activeStep === 2 ? (
        <>
          {isMobile && (
            <IonHeader
              style={{
                borderBottom: '1px solid #eee',
                boxShadow: '0px 1px 5px #eee',
              }}
            >
              <IonToolbar>
                <IonTitle>
                  {activeStep === 1 ? 'Оценка уровня' : 'Ответьте на вопросы'}
                </IonTitle>
                <Button
                  onClick={() => handleStep(-1)}
                  style={{
                    padding: 0,
                  }}
                >
                  <ArrowBackIosNewOutlined color="action" />
                </Button>
              </IonToolbar>
            </IonHeader>
          )}
          {
            <Box display="flex" justifyContent="center" mt={1}>
              <Box
                width="100%"
                maxWidth={isMobile ? 'none' : '700px'}
                borderRadius={isMobile ? 0 : 5}
              >
                <Fade in>
                  <Box px={2}>
                    {activeStep === 1 ? (
                      <LevelingStep handleStep={handleStep} />
                    ) : (
                      <QuestionsStepStep handleStep={handleStep} />
                    )}
                  </Box>
                </Fade>
              </Box>
            </Box>
          }
        </>
      ) : activeStep === 3 ? (
        <Fade in>
          <Box>
            <ResultsStep firstName={firstName} lastName={lastName} />
          </Box>
        </Fade>
      ) : null}
    </>
  );
}
