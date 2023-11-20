import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import React from 'react';
import { Court } from '../../services/club/interface';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface ICourtAccordionProps {
  court: Omit<Court, 'slots'>;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const CourtAccordion: React.FC<ICourtAccordionProps> = (props) => {
  const { court, onClick, disabled } = props;
  return (
    <Accordion
      defaultExpanded
      disabled={disabled}
      elevation={0}
      sx={{
        background: 'none',
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          width: '100%',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{ fontSize: '.95rem', fontWeight: '600' }}
          >
            {court.sport}
          </Typography>
          <Typography variant="body2" sx={{ opacity: '.7' }}>
            {court.tags.map((tag) => tag.title).join(' ')}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: 'flex',
            marginTop: '1rem',
            gap: '1.25rem',
          }}
        >
          <Box
            onClick={onClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',

              width: '100%',
              maxWidth: '125px',
              padding: '10px 7px',
              background: '#6E8FFD',
              borderRadius: '8px',
              color: '#fff',
            }}
          >
            <Typography sx={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {court.price} RUB
            </Typography>
            <Typography>90 мин</Typography>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
