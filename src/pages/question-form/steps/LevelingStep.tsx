import { useState } from 'react';
import { RadioLabel } from '../../../components/molecules/RadioLabel';
import { Box, RadioGroup, Typography } from '@mui/material';
import { QuestionTitle } from '../components/QuestionTitle';
import { Button } from '../../../components/atoms/Button';
import { InfoRounded } from '@mui/icons-material';
import { ERadioLabelType } from '../../../types';
import { leveling } from '../questions';

interface LevelingStepProps {
  handleStep: (stap: number) => void;
}

export function LevelingStep({ handleStep }: LevelingStepProps) {
  const sport = localStorage.getItem('sport')?.toLowerCase() || '';
  const [level, setLevel] = useState<string>('');

  return (
    <Box mt={1}>
      <Box>
        <QuestionTitle title="Как думаете, на каком уровне Вы находитесь?" />
        <Box
          display="flex"
          gap={1.8}
          border="1px solid #E7EEFA"
          borderRadius={3}
          p={2}
          marginY={1}
          sx={{
            background: '#EEF0FF',
          }}
        >
          <InfoRounded sx={{ color: '#7190FF' }} />
          <Typography>
            Не переоценивайте себя! Для того чтобы повысить точность
            выравнивания и найти свою идеальную пару, вы должны отвечать
            правдиво.
          </Typography>
        </Box>
        <RadioGroup
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          sx={{ gap: 1 }}
        >
          {leveling.map((option: any) => {
            return (
              <RadioLabel
                key={option.id}
                value={option.id}
                labelType={ERadioLabelType.WITH_DESCRIPTION}
                title={option.key}
                description={
                  level === option.id ? option.descriptionFor[sport] : ''
                }
              />
            );
          })}
        </RadioGroup>
      </Box>

      <Button
        variant="contained"
        onClick={() => {
          handleStep(1);
          localStorage.setItem('userSelectedLevel', level);
        }}
        sx={{
          position: 'fixed',
          left: 16,
          right: 16,
          width: 'auto',
          bottom: 10,
          fontSize: 18,
          borderRadius: 20,
        }}
        disabled={!level}
      >
        Подтвердить
      </Button>
    </Box>
  );
}
