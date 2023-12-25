import { useHistory } from 'react-router';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { usePlayerProfile } from '../../../services/api/hooks';
import { SportsBaseballOutlined } from '@mui/icons-material';
import { BgContainer } from '../components/BgContainer';
import { getSportRating } from '../../../helpers/getSportRating';
import { isPlatform } from '@ionic/react';

interface ResultsStepProps {
  firstName: string;
  lastName: string;
}

export function ResultsStep({ firstName, lastName }: ResultsStepProps) {
  const isMobile = isPlatform('mobile');
  const history = useHistory();

  const profile = usePlayerProfile();

  const sport = localStorage.getItem('sport') || '';
  const rating = profile ? getSportRating(profile, sport) : 0;

  const initials = firstName && lastName && firstName[0] + '' + lastName[0];

  return (
    <BgContainer>
      <Typography color="#fff" fontSize={22} textAlign="center" mb={8}>
        Давайте играть!
      </Typography>
      <Box minWidth={250} bgcolor="#fff" borderRadius={3} py={2} px={3} mb={8}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={0.7}
          mb={4}
        >
          <Avatar
            sx={{
              width: 60,
              height: 60,
              borderRadius: 50,
              bgcolor: '#1e2f97',
            }}
          >
            {initials}
          </Avatar>
          <Typography>{firstName + ' ' + lastName}</Typography>
          <Box display="flex" gap={1}>
            <Typography component="span">🇷🇺</Typography>
            <Typography>Russian Federation</Typography>
          </Box>
        </Box>
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <SportsBaseballOutlined />
            <Typography textTransform="capitalize">
              {sport.toLocaleLowerCase()}
            </Typography>
          </Box>
          <Typography textAlign="center">Level {rating}</Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        onClick={() => {
          history.push('/');
          history.go(0);
        }}
        sx={{ borderRadius: 20, px: 7 }}
        fullWidth={!isMobile}
      >
        ИГРАТЬ!
      </Button>
    </BgContainer>
  );
}
