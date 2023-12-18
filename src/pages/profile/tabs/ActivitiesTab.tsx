import { useState } from 'react';
import { ToggleButton } from '../../../components/atoms/ToggleButton';
import { usePlayerProfile } from '../../../services/api/hooks';
import { Box, Button, Typography } from '@mui/material';
import dummy from '../../../images/home/booking-bg.png';
import { InfoRounded } from '@mui/icons-material';
import { isPlatform } from '@ionic/react';

export default function ActivitiesTab() {
  const isMobile = isPlatform('mobile');

  const [activeSport, setActiveSport] = useState<string>('Padel');

  const user: any = usePlayerProfile();
  const sportLevel = user && user['rating' + activeSport];

  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      alignItems={isMobile ? 'flex-start' : 'center'}
      gap={4}
    >
      <Box display="flex" gap={1}>
        {['Padel', 'Tennis', 'Pickleball'].map((item: string) => (
          <ToggleButton
            key={item}
            value={item}
            aria-label={item}
            onClick={() => setActiveSport(item)}
            selected={activeSport === item}
          >
            {item}
          </ToggleButton>
        ))}
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        border="1px solid #eee"
        borderRadius={2}
        overflow="hidden"
        maxWidth={isMobile ? '100%' : '350px'}
      >
        <Box px={2} py={1}>
          <Box>
            <Typography color="GrayText">{activeSport}</Typography>
            <Typography fontSize={25}>Level {sportLevel}</Typography>
          </Box>
          <Box>
            <Box display="flex" alignItems="center">
              <Typography color="GrayText">Level reliability: 15%</Typography>
              <Button>
                <InfoRounded color="disabled" />
              </Button>
            </Box>
            <Typography
              color="white"
              bgcolor="#6e8ffe"
              width="fit-content"
              fontSize={13}
              fontWeight={600}
              px={1}
              borderRadius={3}
            >
              LOW
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src={dummy}
          maxWidth="30%"
          sx={{ objectFit: 'cover' }}
        ></Box>
      </Box>
    </Box>
  );
}
