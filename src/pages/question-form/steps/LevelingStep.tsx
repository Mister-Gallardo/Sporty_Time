import { RadioLabel } from '../../../components/molecules/RadioLabel';
import { Box, Button, RadioGroup, Typography } from '@mui/material';
import { QuestionTitle } from '../components/QuestionTitle';
import { InfoRounded } from '@mui/icons-material';
import { ERadioLabelType } from '../../../types';
import { ELeveling, leveling } from '../questions';
import { QuestionsContainer } from '../components/QuestionsContainer';
import { isPlatform } from '@ionic/react';
import { useSearchParam } from '../../../hooks/useSearchParams';

interface LevelingStepProps {
  handleStep: (stap: number) => void;
}

const isMobile = isPlatform('mobile');

export function LevelingStep({ handleStep }: LevelingStepProps) {
  const [sport] = useSearchParam('sport');
  const [level, setLevel] = useSearchParam('level', ELeveling.NONE);

  return (
    <QuestionsContainer>
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
                  level === option.id && sport
                    ? option.descriptionFor[sport.toLocaleLowerCase()]
                    : ''
                }
              />
            );
          })}
        </RadioGroup>
      </Box>

      <Box
        position="fixed"
        bottom={0}
        display="flex"
        justifyContent="center"
        left={16}
        right={16}
        bgcolor="white"
        paddingY={1.25}
      >
        <Button
          onClick={() => {
            handleStep(1);
            setLevel(level);
          }}
          variant="contained"
          sx={{ fontSize: 18, borderRadius: 20, px: isMobile ? 'unset' : 10 }}
          disabled={!level}
          fullWidth={isMobile}
        >
          Подтвердить
        </Button>
      </Box>
    </QuestionsContainer>
  );
}
