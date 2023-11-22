import { Avatar, Box, Typography } from '@mui/material';
import { SportsTennisOutlined } from '@mui/icons-material';
import { Button } from '../../../components/atoms/Button';
import { useHistory } from 'react-router';
import { isPlatform } from '@ionic/react';

import mobile_bg from '../../../images/question-form/bg_events_tennis_mobile.png';
import desktop_bg from '../../../images/question-form/bg_events_tennis_desktop.png';

interface ResultsStepProps {
  firstName: string;
  lastName: string;
}

export function ResultsStep(props: ResultsStepProps) {
  const { firstName, lastName } = props;

  const history = useHistory();

  const userInitials =
    `${Array.from(firstName)[0]}${Array.from(lastName)[0]}` || '';
  const selectedSport = localStorage.getItem('sport');

  return (
    <>
      <Box
        component="img"
        src={isPlatform('mobile') ? mobile_bg : desktop_bg}
        sx={{
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',

          width: '100%',
          height: '100%',
        }}
      />

      <Box
        sx={{
          marginTop: isPlatform('mobile') ? '0' : '4rem',

          position: 'relative',
          height: '100%',
          paddingInline: '20px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',

          color: '#fff',
          paddingBottom: '4rem',
        }}
      >
        <Typography
          sx={{ fontSize: '1.5rem', fontWeight: '600', paddingBottom: '4rem' }}
        >
          Давайте играть!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingBlock: '20px',

            width: '100%',
            maxWidth: '300px',
            background: '#fff',
            color: '#000',
            borderRadius: '12px',
          }}
        >
          <Avatar
            sx={{
              width: '80px',
              height: '80px',

              fontWeight: '600',
              fontSize: '2rem',
              background: '#92B0FE',
              color: '#fff',
            }}
          >
            {userInitials}
          </Avatar>
          <Typography
            sx={{
              fontSize: '15px',
              fontWeight: '600',
              padding: '.5rem 0 .75rem 0',
            }}
          >
            {firstName + ' ' + lastName}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              paddingBottom: '1rem',
            }}
          >
            <Typography style={{ fontSize: '1.5rem' }}>🇷🇺</Typography>
            <Typography>Russian Federation</Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '1px',
              background: 'grey',
              opacity: '.35',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              marginBlock: '.75rem',
            }}
          >
            <SportsTennisOutlined sx={{ opacity: '.75' }} />
            <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>
              {selectedSport}
            </Typography>
          </Box>
          <Box>
            <Typography>Level 1</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: isPlatform('mobile') ? '0' : '8rem',
            position: isPlatform('mobile') ? 'absolute' : 'relative',
            left: '0',
            right: '0',
            bottom: '3rem',
            width: '100%',
          }}
        >
          <Button
            onClick={() => history.push('/')}
            sx={{
              maxWidth: isPlatform('mobile') ? '90%' : '400px',
              height: '40px',
              fontSize: '1.1rem',
              borderRadius: '20px',
              textTransform: 'uppercase',
            }}
          >
            Играть
          </Button>
        </Box>
      </Box>
    </>
  );
}
