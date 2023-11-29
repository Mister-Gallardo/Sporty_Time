import { Avatar, Box, Typography } from '@mui/material';
import {
  SportsBaseballOutlined,
  SportsBasketballOutlined,
  SportsTennisOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import { Button } from '../../../components/atoms/Button';
import { isPlatform } from '@ionic/react';

import mobile_bg from '../../../images/question-form/bg_events_tennis_mobile.png';
import desktop_bg from '../../../images/question-form/bg_events_tennis_desktop.png';

enum Sports {
  PADEL = 0,
  TENNIS = 1,
  PICKEBALL = 2,
}

interface StartQuestioningStepProps {
  firstName: string;
  handleNextStep: () => void;
}

export function StartQuestioningStep(props: StartQuestioningStepProps) {
  const { handleNextStep, firstName } = props;

  const [selectedSport, setSelectedSport] = useState<number>(Sports.PADEL);
  localStorage.setItem('sport', selectedSport.toString());

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

          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
      <Box
        sx={{
          marginTop: isPlatform('mobile') ? '' : '4rem',
          position: 'relative',
          height: '100%',
          paddingInline: '20px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',

          color: '#fff',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Typography sx={{ fontSize: '1.5rem', fontWeight: '500' }}>
            Hello {firstName}
          </Typography>
          <Typography
            sx={{ textAlign: 'center', fontWeight: '500', fontSize: '.9rem' }}
          >
            Заполните свой профиль, чтобы максимально использовать возможности
            Playtomic
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                width: '75px',
                height: '75px',
                border: '2px solid #fff',
                margin: '1.5rem 0 .25rem 0',
              }}
            />
            <Typography sx={{ fontWeight: '500' }}>Изменить фото</Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              margin: '4.25rem 0 1.25rem 0',
            }}
          >
            Для какого вида спорта Вы хотите узнать уровень?
          </Typography>
          <Box
            sx={{
              gap: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              onClick={() => setSelectedSport(Sports.PADEL)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingInline: '20px',

                width: '100%',
                maxWidth: '125px',
                height: '40px',
                border: '1px #fff solid',
                borderRadius: '20px',

                color: selectedSport === Sports.PADEL ? '#000' : '#fff',
                background:
                  selectedSport === Sports.PADEL ? '#fff' : 'transparent',
                transition: 'all .25s ease',
                cursor: 'pointer',
              }}
            >
              <SportsBaseballOutlined sx={{ fontSize: '1.35rem' }} />
              <Typography sx={{ fontSize: '.9rem', fontWeight: '500' }}>
                Padel
              </Typography>
            </Box>
            <Box
              onClick={() => setSelectedSport(Sports.TENNIS)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingInline: '15px',

                width: '100%',
                maxWidth: '125px',
                height: '40px',
                border: '1px #fff solid',
                borderRadius: '20px',

                color: selectedSport === Sports.TENNIS ? '#000' : '#fff',
                background:
                  selectedSport === Sports.TENNIS ? '#fff' : 'transparent',
                transition: 'all .25s ease',
                cursor: 'pointer',
              }}
            >
              <SportsTennisOutlined sx={{ fontSize: '1.35rem' }} />
              <Typography sx={{ fontSize: '.9rem', fontWeight: '500' }}>
                Tennis
              </Typography>
            </Box>
            <Box
              onClick={() => setSelectedSport(Sports.PICKEBALL)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingInline: '15px',

                width: '100%',
                maxWidth: '125px',
                height: '40px',
                border: '1px #fff solid',
                borderRadius: '20px',

                color: selectedSport === Sports.PICKEBALL ? '#000' : '#fff',
                background:
                  selectedSport === Sports.PICKEBALL ? '#fff' : 'transparent',
                transition: 'all .25s ease',
                cursor: 'pointer',
              }}
            >
              <SportsBasketballOutlined sx={{ fontSize: '1.35rem' }} />
              <Typography sx={{ fontSize: '.9rem', fontWeight: '500' }}>
                Pickeball
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingTop: '7rem',
            display: 'flex',
            width: '100%',
          }}
        >
          <Button
            onClick={() => handleNextStep()}
            sx={{
              maxWidth: '400px',
              margin: '0 auto',
              height: '40px',
              fontSize: '1.1rem',
              borderRadius: '20px',
              textTransform: 'uppercase',
            }}
          >
            Начать
          </Button>
        </Box>
      </Box>
    </>
  );
}
