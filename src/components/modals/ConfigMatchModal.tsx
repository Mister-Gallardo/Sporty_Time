import { useState } from 'react';
import { IonAvatar, isPlatform } from '@ionic/react';
import { Box, Button, RadioGroup, Switch, Typography } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { RadioLabel } from '../../components/molecules/RadioLabel';
import { MultiThumbSlider } from '../molecules/MultiThumbSlider';
import {
  ERadioLabelType,
  IConfigMatchModalData,
  PreferedGender,
} from '../../types';
import useToggle from '../../hooks/useToggle';
import { ModalContainer } from './ModalContainer';
// import { useUserInfo } from '../../services/api/hooks';

interface IConfigMatchModal {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  getData: (data: IConfigMatchModalData) => void;
}

export const ConfigMatchModal: React.FC<IConfigMatchModal> = ({
  openState,
  handleModal,
  getData,
}) => {
  const isMobile = isPlatform('mobile');
  // const user = useUserInfo();

  // const padelRating = user?.player.ratingPadel;
  const padelRating = 1.5;

  const ratingFrom = padelRating < 0.25 ? 0 : padelRating - 0.25;
  const ratingTo = padelRating > 6.25 ? 7 : padelRating + 0.75;

  const [isPrivate, setIsPrivate] = useToggle();
  const [matchType, setMatchType] = useState<string>('competitive');
  const [gender, setGender] = useState<PreferedGender | string>(
    PreferedGender.ALL,
  );

  const [rangeMinValue, setRangeMinValue] = useState<number>(ratingFrom);
  const [rangeMaxValue, setRangeMaxValue] = useState<number>(ratingTo);

  const handleRangeValueChange = (_: Event, values: number | number[]) => {
    if (Array.isArray(values)) {
      if (rangeMinValue !== values[0]) setRangeMinValue(values[0]);
      if (rangeMaxValue !== values[2]) setRangeMaxValue(values[2]);
    }
  };

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Настройте свой матч"
    >
      <Box mb={2} display="flex" flexDirection="column" gap={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" gap={1} alignItems="center">
            <CheckCircleOutlinedIcon />
            <Typography>Создать приватный матч</Typography>
          </Box>
          <Switch value={isPrivate} onChange={() => setIsPrivate()} />
        </Box>

        <Box>
          <Typography fontWeight={700} mb={1}>
            Выберите тип матча
          </Typography>
          <RadioGroup
            name="select match type"
            sx={{ gap: 2 }}
            value={matchType}
            onChange={(e) => setMatchType(e.target.value)}
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
                        <Typography align="center">{padelRating}</Typography>
                      </Box>
                      <Box>
                        <Typography>Диапазон уровней</Typography>
                        <Typography>
                          {rangeMinValue} - {rangeMaxValue}
                        </Typography>
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
                <Box marginY={2} mx={1}>
                  <Typography border="1px solid #eee" borderRadius={4} p={2}>
                    Вы выбираете и устанавливаете диапазон уровней. Игроки за
                    пределами этого диапазона могут запросить доступ.
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

        <Box>
          <Typography fontWeight={700} mb={1}>
            Выберите пол, с которым хотите играть.
          </Typography>
          <RadioGroup
            name="select gender"
            sx={{ gap: 2 }}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <RadioLabel
              value={PreferedGender.ALL}
              labelType={ERadioLabelType.WITH_DESCRIPTION}
              title="Любой"
              description="Присоединиться могут игроки обоих полов"
            />
            <RadioLabel
              value={PreferedGender.WOMEN}
              labelType={ERadioLabelType.WITH_DESCRIPTION}
              title="Только женщины"
              description="Присоединиться могут только женщины"
            />
            <RadioLabel
              value={PreferedGender.MEN}
              labelType={ERadioLabelType.WITH_DESCRIPTION}
              title="Только мужчины"
              description="Присоединиться могут только мужчины"
            />
            <RadioLabel
              value={PreferedGender.MIXED}
              labelType={ERadioLabelType.WITH_DESCRIPTION}
              title="Смешанный"
              description="Мужчина и женщина в каждой команде"
            />
          </RadioGroup>
        </Box>

        <Button
          onClick={() =>
            getData({
              isPrivate,
              matchType,
              ratingFrom: rangeMinValue,
              ratingTo: rangeMaxValue,
              gender,
            })
          }
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#333',
            marginTop: 2,
            borderRadius: 12,
            fontSize: 18,
            fontWeight: 600,
            mb: isMobile ? 5 : 0,
          }}
        >
          Перейти к оплате
        </Button>
      </Box>
    </ModalContainer>
  );
};
