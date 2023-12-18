import { useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import {
  SportsBaseballOutlined,
  SportsBasketballOutlined,
  SportsTennisOutlined,
} from '@mui/icons-material';
import { usePlayerProfile } from '../../../services/api/hooks';
import { SportTypeRow } from '../components/SportTypeRow';
import { Button } from '../../../components/atoms/Button';
import { BgContainer } from '../components/BgContainer';
import { Sports } from '../../../types';

interface ChooseYourSportProps {
  firstName: string;
  handleStep: (step: number) => void;
  handleSkip: () => void;
}

export function ChooseYourSport(props: ChooseYourSportProps) {
  const { handleStep, firstName, handleSkip } = props;

  const [selectedSport, setSelectedSport] = useState<string>(Sports.PADEL);

  const player: any = usePlayerProfile();

  const checkRating = (sport: string) => {
    if (!player) return '';

    const currentSportRate = player['rating' + sport];
    return currentSportRate ? currentSportRate : null;
  };

  return (
    <BgContainer>
      <Box color="white">
        <Typography fontSize={22} fontWeight={600} textAlign="center">
          Hello {firstName}
        </Typography>
        <Typography textAlign="center">
          Заполните свой профиль, чтобы максимально использовать возможности
          Playtomic
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            sx={{
              width: '75px',
              height: '75px',
              border: '2px solid #fff',
              margin: '1.5rem 0 .25rem 0',
            }}
          />
          <Typography fontWeight={500}>Изменить фото</Typography>
        </Box>
      </Box>
      <Box mb={5} color="white">
        <Typography textAlign="center" mb={4}>
          Для какого вида спорта Вы хотите узнать уровень?
        </Typography>
        <Box>
          <SportTypeRow
            type={Sports.PADEL}
            icon={<SportsBaseballOutlined />}
            level={player?.ratingPadel}
            isActive={selectedSport === Sports.PADEL}
            onClick={() => setSelectedSport(Sports.PADEL)}
          />
          <SportTypeRow
            type={Sports.TENNIS}
            icon={<SportsBasketballOutlined />}
            level={player?.ratingTennis}
            isActive={selectedSport === Sports.TENNIS}
            onClick={() => setSelectedSport(Sports.TENNIS)}
          />
          <SportTypeRow
            type={Sports.PICKEBALL}
            icon={<SportsTennisOutlined />}
            level={player?.ratingPickleball}
            isActive={selectedSport === Sports.PICKEBALL}
            onClick={() => setSelectedSport(Sports.PICKEBALL)}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        gap={1}
        width="100%"
        height={100}
      >
        {checkRating(selectedSport) ? (
          <Button
            onClick={() =>
              console.log('Current questionnaire was passed => go on')
            }
            variant="contained"
          >
            Продолжить
          </Button>
        ) : (
          <>
            <Button
              onClick={() => {
                handleStep(1);
                localStorage.setItem('sport', selectedSport);
              }}
              variant="contained"
            >
              Начать
            </Button>
            <Button onClick={() => handleSkip()} variant="text">
              Не сейчас
            </Button>
          </>
        )}
      </Box>
    </BgContainer>
  );
}
