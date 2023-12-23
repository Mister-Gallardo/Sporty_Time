import { useState } from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import {
  SportsBaseballOutlined,
  SportsBasketballOutlined,
  SportsTennisOutlined,
} from '@mui/icons-material';
import { usePlayerProfile } from '../../../services/api/hooks';
import { SportTypeRow } from '../components/SportTypeRow';
import { BgContainer } from '../components/BgContainer';
import { useHistory } from 'react-router';
import { Sport } from '../../../types';
import { getSportRating } from '../../../helpers/getSportRating';

interface ChooseYourSportProps {
  firstName: string;
  handleStep: (step: number) => void;
}

export function ChooseYourSport({
  handleStep,
  firstName,
}: ChooseYourSportProps) {
  const history = useHistory();

  const [selectedSport, setSelectedSport] = useState<Sport>(Sport.PADEL);

  const player = usePlayerProfile();
  const currentSportRate = player ? getSportRating(player, selectedSport) : '';

  return (
    <BgContainer>
      <Box color="white">
        <Typography fontSize={22} fontWeight={600} textAlign="center">
          Hello {firstName}
        </Typography>
        <Typography textAlign="center">
          Заполните свой профиль, чтобы максимально использовать возможности
          Sportytime
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
            type={Sport.PADEL}
            icon={<SportsBaseballOutlined />}
            level={player?.ratingPadel}
            isActive={selectedSport === Sport.PADEL}
            onClick={() => setSelectedSport(Sport.PADEL)}
          />
          <SportTypeRow
            type={Sport.TENNIS}
            icon={<SportsBasketballOutlined />}
            level={player?.ratingTennis}
            isActive={selectedSport === Sport.TENNIS}
            onClick={() => setSelectedSport(Sport.TENNIS)}
          />
          <SportTypeRow
            type={Sport.PICKLEBALL}
            icon={<SportsTennisOutlined />}
            level={player?.ratingPickleball}
            isActive={selectedSport === Sport.PICKLEBALL}
            onClick={() => setSelectedSport(Sport.PICKLEBALL)}
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
        {currentSportRate ? (
          <Button
            onClick={() => history.push('/')}
            variant="contained"
            sx={{ borderRadius: 20 }}
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
              sx={{ borderRadius: 20 }}
            >
              Начать
            </Button>
            <Button
              onClick={() => history.push('/')}
              variant="text"
              sx={{ borderRadius: 20 }}
            >
              Не сейчас
            </Button>
          </>
        )}
      </Box>
    </BgContainer>
  );
}
