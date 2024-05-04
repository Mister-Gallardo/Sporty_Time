import React, { useState } from 'react';
import {
  Box,
  Fade,
  RadioGroup,
  Slider,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import { useFormContext } from 'react-hook-form';
import { EGender, ESport } from '../../services/matches/interface';
import { ERadioLabelType, RadioLabel } from '../molecules/RadioLabel';

enum ELeveType {
  ANY = 'ANY',
  CUSTOM = 'CUSTOM',
}

export const ClassCreationForm = () => {
  const { setValue, watch } = useFormContext();
  const {
    isPrivate,
    playersCount,
    ratingFrom,
    ratingTo,
    gender,
    title,
    description,
    sport,
    priceForSpot,
  } = watch();

  const [levelType, setLevelType] = useState<ELeveType>(ELeveType.ANY);
  const [levelRange, setLevelRange] = useState<number[]>([0, 7]);

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" gap={1} alignItems="center">
          <HttpsOutlinedIcon />
          <Typography>Приватное занятие</Typography>
        </Box>
        <Switch
          value={isPrivate}
          onChange={(_, val) => setValue('isPrivate', val)}
        />
      </Box>
      <Box>
        <Typography fontWeight={700} mb={1}>
          Вид спорта
        </Typography>
        <RadioGroup
          name="select sport"
          sx={{ gap: 1 }}
          value={sport}
          onChange={(e) => setValue('sport', e.target.value)}
        >
          <RadioLabel
            value={ESport.PADEL}
            labelType={ERadioLabelType.TITLE_ONLY}
            title="Падел"
          />
          <RadioLabel
            value={ESport.TENNIS}
            labelType={ERadioLabelType.TITLE_ONLY}
            title="Теннис"
          />
          <RadioLabel
            value={ESport.PICKLEBALL}
            labelType={ERadioLabelType.TITLE_ONLY}
            title="Пиклбол"
          />
        </RadioGroup>
      </Box>

      <Box>
        <Typography fontWeight={700} mb={1}>
          Количество участников
        </Typography>
        <ToggleButtonGroup
          value={playersCount}
          exclusive
          onChange={(_, val) => setValue('playersCount', val)}
          aria-label="students-amount"
          color="primary"
        >
          <ToggleButton value={1} sx={{ py: 0, px: 3 }}>
            1
          </ToggleButton>
          <ToggleButton value={2} sx={{ py: 0, px: 3 }}>
            2
          </ToggleButton>
          <ToggleButton value={3} sx={{ py: 0, px: 3 }}>
            3
          </ToggleButton>
          <ToggleButton value={4} sx={{ py: 0, px: 3 }}>
            4
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <Typography fontWeight={700} mb={1}>
          Необходимый уровень
        </Typography>
        <ToggleButtonGroup
          value={levelType}
          exclusive
          onChange={(_, val) => setLevelType(val)}
          aria-label="students-level"
          color="primary"
        >
          <ToggleButton
            value="ANY"
            sx={{ py: 0, px: 3, textTransform: 'initial' }}
          >
            Любой
          </ToggleButton>
          <ToggleButton
            value="CUSTOM"
            sx={{ py: 0, px: 3, textTransform: 'initial' }}
          >
            Установить вручную
          </ToggleButton>
        </ToggleButtonGroup>

        {levelType === ELeveType.CUSTOM && (
          <Fade in>
            <Box>
              <Box
                my={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography fontSize={16}>От</Typography>
                <Typography fontSize={16} width={35} textAlign="center">
                  {levelRange[0]}
                </Typography>
                &mdash;
                <Typography ml={1} fontSize={16}>
                  До
                </Typography>
                <Typography fontSize={16} width={35} textAlign="center">
                  {levelRange[1]}
                </Typography>
              </Box>
              <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={levelRange}
                onChange={(_, newValue) => {
                  if (Array.isArray(newValue)) {
                    setLevelRange([newValue[0], newValue[1]]);
                  }
                }}
                onChangeCommitted={(_, newValue) => {
                  if (Array.isArray(newValue)) {
                    if (ratingFrom !== newValue[0])
                      setValue('ratingFrom', newValue[0]);
                    if (ratingTo !== newValue[1])
                      setValue('ratingTo', newValue[1]);
                  }
                }}
                valueLabelDisplay="auto"
                min={0}
                max={7}
                disableSwap
                marks={marks}
                step={0.1}
              />
            </Box>
          </Fade>
        )}
      </Box>

      <Box>
        <Typography fontWeight={700} mb={1}>
          Пол участников
        </Typography>
        <RadioGroup
          name="select gender"
          sx={{ gap: 1 }}
          value={gender}
          onChange={(e) => setValue('gender', e.target.value)}
        >
          <RadioLabel
            value={EGender.ALL}
            labelType={ERadioLabelType.TITLE_ONLY}
            title="Любой"
          />
          <RadioLabel
            value={EGender.WOMEN}
            labelType={ERadioLabelType.TITLE_ONLY}
            title="Только женщины"
          />
          <RadioLabel
            value={EGender.MEN}
            labelType={ERadioLabelType.TITLE_ONLY}
            title="Только мужчины"
          />
        </RadioGroup>
      </Box>

      <Box>
        <Box display="flex">
          <Typography fontWeight={700} mb={1} mr={0.5}>
            Заголовок
          </Typography>
          <Typography color="gray">(минимум 5 символов)</Typography>
        </Box>
        <TextField
          value={title}
          onChange={(e) => setValue('title', e.target.value)}
          placeholder="Заголовок занятия"
          autoComplete="off"
          fullWidth
        />
      </Box>
      <Box>
        <Typography fontWeight={700} mb={1}>
          Описание
        </Typography>
        <TextField
          value={description}
          onChange={(e) => setValue('description', e.target.value)}
          placeholder="Описание занятия"
          autoComplete="off"
          multiline
          rows={2}
          variant="outlined"
          fullWidth
        />
      </Box>

      <Box>
        <Typography fontWeight={700} mb={1}>
          Цена занятия для одного участника
        </Typography>

        <Box display="flex" alignItems="end" gap={1}>
          <TextField
            value={priceForSpot}
            onChange={(e) => setValue('priceForSpot', e.target.value)}
            autoComplete="off"
            type="number"
            placeholder="0"
            sx={{
              maxWidth: 100,
              input: { textAlign: 'center', fontSize: 18 },
              'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button':
                {
                  '-webkit-appearance': 'none',
                  margin: 0,
                },
              'input[type=number]': {
                '-moz-appearance': 'textfield',
              },
            }}
          />
          <span>руб.</span>
        </Box>
      </Box>
    </Box>
  );
};

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
];
