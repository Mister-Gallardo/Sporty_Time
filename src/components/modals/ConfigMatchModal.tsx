import { IonAvatar } from '@ionic/react';
import { Box, Button, RadioGroup, Switch, Typography } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import {
  ERadioLabelType,
  RadioLabel,
} from '../../components/molecules/RadioLabel';
import { MultiThumbSlider } from '../molecules/MultiThumbSlider';
import { usePlayerProfile } from '../../services/api/hooks';
import { ModalContainer } from './ModalContainer';
import { getSportRating } from '../../helpers/getSportRating';
import { EGender, EMatchType } from '../../services/matches/interface';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

interface IConfigMatchModal {
  sport: string;
  openState: boolean;
  handleModal: (val?: boolean) => void;
  handleNext: () => void;
}

export const ConfigMatchModal: React.FC<IConfigMatchModal> = ({
  sport,
  openState,
  handleModal,
  handleNext,
}) => {
  const [player] = usePlayerProfile();
  const rating = player ? getSportRating(player, sport) : 0;

  const { setValue, watch } = useFormContext();
  const { isPrivate, type, gender, ratingFrom, ratingTo } = watch();

  useEffect(() => {
    if (rating) {
      const ratingFrom = rating < 0.25 ? 0 : +(rating - 0.25).toFixed(2);
      const ratingTo = rating > 6.25 ? 7 : +(rating + 0.75).toFixed(2);
      setValue('ratingFrom', ratingFrom);
      setValue('ratingTo', ratingTo);
    }
  }, [rating]);

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Настройте свой матч"
    >
      <Box display="flex" flexDirection="column" gap={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" gap={1} alignItems="center">
            <CheckCircleOutlinedIcon />
            <Typography>Создать приватный матч</Typography>
          </Box>
          <Switch
            value={isPrivate}
            onChange={(_, val) => setValue('isPrivate', val)}
          />
        </Box>

        <Box>
          <Typography fontWeight={700} mb={1}>
            Выберите тип матча
          </Typography>
          <RadioGroup
            name="select match type"
            sx={{ gap: 2 }}
            value={type}
            onChange={(e) => setValue('type', e.target.value)}
          >
            <Box>
              <RadioLabel
                value={EMatchType.COMPETITIVE}
                labelType={ERadioLabelType.WITH_DESCRIPTION}
                title="Сопернический Матч"
                description="Результат повлияет на ваш уровень и рейтинг."
              />

              {type === EMatchType.COMPETITIVE && (
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
                        <Typography align="center">{rating}</Typography>
                      </Box>
                      <Box>
                        <Typography>Диапазон уровней</Typography>
                        <Typography>
                          {ratingFrom} - {ratingTo}
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
                value={EMatchType.FRIENDLY}
                labelType={ERadioLabelType.WITH_DESCRIPTION}
                title="Дружеский матч"
                description="Результат не повлияет на ваш уровень или рейтинг."
              />

              {type === EMatchType.FRIENDLY && (
                <Box marginY={2} mx={1}>
                  <Typography border="1px solid #eee" borderRadius={4} p={2}>
                    Вы выбираете и устанавливаете диапазон уровней. Игроки за
                    пределами этого диапазона могут запросить доступ.
                  </Typography>

                  <Box mt={2}>
                    <Box display="flex" justifyContent="space-between" mb={3}>
                      <Box>
                        <Typography>Min</Typography>
                        <Typography textAlign="center">{ratingFrom}</Typography>
                      </Box>
                      <Box>
                        <Typography>Max</Typography>
                        <Typography textAlign="center">{ratingTo}</Typography>
                      </Box>
                    </Box>

                    <MultiThumbSlider rating={rating} />
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
            onChange={(e) => setValue('gender', e.target.value)}
          >
            <RadioLabel
              value={EGender.ALL}
              labelType={ERadioLabelType.WITH_DESCRIPTION}
              title="Любой"
              description="Присоединиться могут игроки обоих полов"
            />
            <RadioLabel
              value={EGender.WOMEN}
              labelType={ERadioLabelType.WITH_DESCRIPTION}
              title="Только женщины"
              description="Присоединиться могут только женщины"
            />
            <RadioLabel
              value={EGender.MEN}
              labelType={ERadioLabelType.WITH_DESCRIPTION}
              title="Только мужчины"
              description="Присоединиться могут только мужчины"
            />
            <RadioLabel
              value={EGender.MIXED}
              labelType={ERadioLabelType.WITH_DESCRIPTION}
              title="Смешанный"
              description="Мужчина и женщина в каждой команде"
            />
          </RadioGroup>
        </Box>

        <Button
          onClick={() => {
            handleModal();
            handleNext();
          }}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#333',
            marginTop: 2,
            borderRadius: 12,
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Перейти к оплате
        </Button>
      </Box>
    </ModalContainer>
  );
};
