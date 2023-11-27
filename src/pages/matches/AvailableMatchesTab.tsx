import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { MatchCard } from '../../components/molecules/MatchCard';
import { isPlatform } from '@ionic/react';
import { ExpandMore } from '@mui/icons-material';

interface IAvailableMatchesTabProps {}

export function AvailableMatchesTab(props: IAvailableMatchesTabProps) {
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
          paddingLeft: isPlatform('mobile') ? 'unset' : '1rem',
          margin: '0 calc(50% - 50vw)',
          paddingBottom: '.75rem',
          display: '-webkit-box',

          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </Box>

      <Accordion
        defaultExpanded
        elevation={0}
        sx={{
          background: 'none',
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          sx={{
            padding: '0',
          }}
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
        <AccordionDetails>
          <Box
            sx={{
              paddingLeft: isPlatform('mobile') ? 'unset' : '1rem',
              margin: '0 calc(50% - 50vw)',
              paddingBottom: '.75rem',
              display: '-webkit-box',

              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
            }}
          >
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
