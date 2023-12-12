import { useHistory } from 'react-router';
import { Avatar, Box, Typography } from '@mui/material';
import { Button } from '../../../components/atoms/Button';
import { useUserProfile } from '../../../services/api/hooks';
import { SportsBaseballOutlined } from '@mui/icons-material';
import { BgContainer } from '../components/BgContainer';

interface ResultsStepProps {
  firstName: string;
  lastName: string;
}

export function ResultsStep({ firstName, lastName }: ResultsStepProps) {
  const history = useHistory();

  const profile: any = useUserProfile();

  const sport = localStorage.getItem('sport');
  const rating = profile ? profile[`rating${sport}`] : '';
  const initials = (firstName || lastName) && firstName[0] + '' + lastName[0];

  return (
    <BgContainer>
      <Box>
        <Typography color="white" fontSize={22} textAlign="center" mb={8}>
          Давайте играть!
        </Typography>
        <Box bgcolor="white" borderRadius={3} py={2} px={3}>
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
              <Typography>{sport}</Typography>
            </Box>
            <Typography textAlign="center">Level {rating}</Typography>
          </Box>
        </Box>
      </Box>

      <Button
        variant="contained"
        onClick={() => {
          history.push('/');
          history.go(0);
        }}
      >
        ИГРАТЬ!
      </Button>
    </BgContainer>
  );
}
