import { Avatar, Box, RadioGroup, Switch, Typography } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import {
  ERadioLabelType,
  RadioLabel,
} from '../../components/molecules/RadioLabel';
import { MultiThumbSlider } from '../molecules/MultiThumbSlider';
import { EGender, EMatchType } from '../../services/matches/interface';
import { useFormContext } from 'react-hook-form';

interface IMatchCreationFormProps {
  rating: any;
}

export const MatchCreationForm: React.FC<IMatchCreationFormProps> = ({
  rating,
}) => {
  const { setValue, watch } = useFormContext();
  const { isPrivate, type, gender, ratingFrom, ratingTo } = watch();

  return (
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
                      <Avatar
                        sx={{
                          width: 30,
                          height: 30,
                          backgroundColor: 'primary.main',
                        }}
                      />
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
                    Игроки с несоответствующим уровнем могут запросить доступ
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
        </RadioGroup>
      </Box>
    </Box>
  );
};
