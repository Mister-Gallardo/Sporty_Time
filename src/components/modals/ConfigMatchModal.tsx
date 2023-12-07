import React, { useState } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonAvatar,
} from '@ionic/react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, RadioGroup, Typography } from '@mui/material';

import { RadioLabel } from '../../components/molecules/RadioLabel';
import { Button } from '../atoms/Button';
import { MultiThumbSlider } from '../molecules/MultiThumbSlider';

export enum ERadioLabelType {
  WITH_ICON_AND_DESCRIPTION,
  TITLE_ONLY,
  WITH_DESCRIPTION,
}

// add correct type!
interface IConfigMatchModal {
  openState: boolean;
  handleModal: any;
}

export function ConfigMatchModal({
  openState,
  handleModal,
}: IConfigMatchModal) {
  const [matchType, setMatchType] = useState<string>('competitive');
  const [gender, setGender] = useState<string>('all');

  const handleMatchTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMatchType((event.target as HTMLInputElement).value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
  };

  const [rangeMinValue, setRangeMinValue] = useState<number>(1.5);
  const [rangeMaxValue, setRangeMaxValue] = useState<number>(2.6);

  const handleRangeValueChange = (_: Event, values: number | number[]) => {
    if (Array.isArray(values)) {
      if (rangeMinValue !== values[0]) setRangeMinValue(values[0]);
      if (rangeMaxValue !== values[2]) setRangeMaxValue(values[2]);
    }
  };

  return (
    <IonModal
      onDidDismiss={() => handleModal(false)}
      isOpen={openState}
      initialBreakpoint={0.95}
      breakpoints={[0, 0.25, 0.5, 0.75, 0.95]}
      handleBehavior="cycle"
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Настройте свой матч</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleModal}>
              <CloseRoundedIcon sx={{ color: 'black' }} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Box mb={2}>
          <Box>
            <Typography fontWeight={700} mb={1}>
              Выберите тип матча
            </Typography>
            <RadioGroup
              name="select match type"
              sx={{ gap: 2 }}
              value={matchType}
              onChange={handleMatchTypeChange}
            >
              <Box>
                <RadioLabel
                  value="competitive"
                  labelType={ERadioLabelType.WITH_DESCRIPTION}
                  title="Сопернический Матч"
                  description="Результат повлияет на ваш уровень и рейтинг."
                />

                {matchType === 'competitive' && (
                  <Box display="flex" justifyContent="center" my={2}>
                    <Box
                      sx={{
                        border: '1px solid #eee',
                        borderRadius: 3,
                        padding: 1.5,
                      }}
                    >
                      <Box
                        display="flex"
                        mb={1}
                        pb={1}
                        borderBottom="1px solid #eee"
                      >
                        <Box borderRight="1px solid #eee" pr={1.5} mr={1.5}>
                          <IonAvatar style={{ width: 30, height: 30 }}>
                            <img
                              alt="Silhouette of a person's head"
                              src="https://ionicframework.com/docs/img/demos/avatar.svg"
                            />
                          </IonAvatar>
                          <Typography align="center">2.5</Typography>
                        </Box>
                        <Box>
                          <Typography>Match Range Level</Typography>
                          <Typography>2.25 - 3.25</Typography>
                        </Box>
                      </Box>
                      <Typography>
                        Игроки с более высоким уровнем могут запросить доступ
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              <Box>
                <RadioLabel
                  value="friendly"
                  labelType={ERadioLabelType.WITH_DESCRIPTION}
                  title="Дружеский матч"
                  description="Результат не повлияет на ваш уровень или рейтинг."
                />

                {matchType === 'friendly' && (
                  <Box my={2} mx={1}>
                    <Typography border="1px solid #eee" borderRadius={4} p={2}>
                      Lorem ipsum dolor sit amet consectetur sali adipisicing
                      elit. Commodi eligendi amet veritatis ipsum cupiditate
                      laboriosam quas optio porro distinctio aspernatur?
                    </Typography>

                    <Box mt={2}>
                      <Box display="flex" justifyContent="space-between" mb={3}>
                        <Box>
                          <Typography>Min</Typography>
                          <Typography textAlign="center">
                            {rangeMinValue}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography>Max</Typography>
                          <Typography textAlign="center">
                            {rangeMaxValue}
                          </Typography>
                        </Box>
                      </Box>

                      <MultiThumbSlider
                        curentMinValue={rangeMinValue}
                        curentMaxValue={rangeMaxValue}
                        handleChange={handleRangeValueChange}
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            </RadioGroup>
          </Box>

          <Box mt={5}>
            <Typography fontWeight={700} mb={1}>
              Выберите пол, с которым хотите играть.
            </Typography>
            <RadioGroup
              name="select gender"
              sx={{ gap: 2 }}
              value={gender}
              onChange={handleGenderChange}
            >
              <RadioLabel
                value="all"
                labelType={ERadioLabelType.WITH_DESCRIPTION}
                title="Любой"
                description="Присоединиться могут игроки обоих полов"
              />
              <RadioLabel
                value="woman"
                labelType={ERadioLabelType.WITH_DESCRIPTION}
                title="Только женщины"
                description="Присоединиться могут только женщины"
              />
              <RadioLabel
                value="mixed"
                labelType={ERadioLabelType.WITH_DESCRIPTION}
                title="Смешанный"
                description="Мужчина и женщина в каждой команде"
              />
            </RadioGroup>
          </Box>
        </Box>

        <Button
          sx={{
            backgroundColor: '#333',
            paddingY: 2.5,
            borderRadius: 12,
            fontWeight: 600,
            fontSize: 16,
            marginBottom: 5,
          }}
        >
          Перейти к оплате
        </Button>
      </IonContent>
    </IonModal>
  );
}
