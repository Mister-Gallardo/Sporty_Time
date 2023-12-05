import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { MatchCard } from '../../components/molecules/MatchCard';
import { IonLoading, isPlatform } from '@ionic/react';
import { ExpandMore } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { getAvailableMatches } from '../../services/matches/service';

interface IAvailableMatchesTabProps {}

export function AvailableMatchesTab({}: IAvailableMatchesTabProps) {
  const { data, isLoading } = useQuery({
    queryKey: [`available-matches`],
    queryFn: getAvailableMatches,
  });

  const availableMatchesArray = data?.data;

  if (isLoading) {
    return <IonLoading isOpen />;
  }

  if (data?.data.length === 0) {
    return <Box sx={{ textAlign: 'center' }}>No available matches</Box>;
  }

  return (
    <Box
      sx={{
        position: 'relative',
        marginBottom: isPlatform('mobile') ? '2.5rem' : 'unset',
        paddingInline: isPlatform('mobile') ? '10px' : '2rem',
        background: '#fff',
        paddingBlock: '1.25rem',
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}
      >
        <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>
          Для вашего уровня
        </Typography>
        <Typography sx={{ fontSize: '14px', opacity: '.7', fontWeight: '500' }}>
          Эти соответствия полностью соответствуют вашему поиску и вашему уровню
        </Typography>
      </Box>

      <Box
        sx={{
          paddingBottom: '.75rem',
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {availableMatchesArray?.map((card, index) => {
          return <MatchCard key={index} {...card} />;
        })}
      </Box>

      <Accordion
        defaultExpanded
        elevation={0}
        sx={{
          padding: 0,
          background: 'none',
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          sx={{ padding: 0 }}
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box>
            <Typography sx={{ fontWeight: '700', fontSize: '1.1rem' }}>
              Запросите место
            </Typography>
            <Typography sx={{ fontSize: '.8rem' }}>
              Эти матчи не соответствуют вашему уровню. Чтобы присоединиться к
              ним, вам необходимо запросить место.
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <Box
            sx={{
              paddingBottom: '.75rem',
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
            }}
          >
            {availableMatchesArray?.map((card, index) => {
              return <MatchCard key={index} {...card} />;
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
