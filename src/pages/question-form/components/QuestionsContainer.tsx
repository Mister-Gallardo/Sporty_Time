import React, { PropsWithChildren } from 'react';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { IonHeader, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { Box, Button, Fade } from '@mui/material';
import useSearchParams from '../../../hooks/useSearchParams';

interface IQuestionsContainerProps extends PropsWithChildren {}

const isMobile = isPlatform('mobile');

export const QuestionsContainer: React.FC<IQuestionsContainerProps> = ({
  children,
}) => {
  const [getIndex, setIndex] = useSearchParams();
  const currentStep = getIndex('step') ? +getIndex('step')! : 1;

  const handleStep = (step: number) =>
    setIndex('step', `${currentStep + step}`);

  return (
    <>
      {isMobile ? (
        <IonHeader
          style={{
            borderBottom: '1px solid #eee',
            boxShadow: '0px 1px 5px #eee',
          }}
        >
          <IonToolbar>
            <IonTitle>
              {currentStep === 1 ? 'Оценка уровня' : 'Ответьте на вопросы'}
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
      ) : (
        <Box display="flex" justifyContent="center">
          <Box width="100%" maxWidth={550}>
            <Button
              onClick={() => handleStep(-1)}
              startIcon={<KeyboardBackspaceRoundedIcon />}
            >
              Назад
            </Button>
          </Box>
        </Box>
      )}

      <Box display="flex" justifyContent="center" mt={1}>
        <Box
          width="100%"
          maxWidth={isMobile ? 'none' : 550}
          borderRadius={isMobile ? 0 : 5}
        >
          <Fade in>
            <Box px={isMobile ? 2 : 'unset'} mt={1}>
              {children}
            </Box>
          </Fade>
        </Box>
      </Box>
    </>
  );
};
