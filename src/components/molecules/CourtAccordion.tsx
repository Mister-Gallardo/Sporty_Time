import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import React from 'react';
import { Court, IAvailableTime } from '../../services/club/interface';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface ICourtAccordionProps {
  court: Court;
  disabled?: boolean;
  handleSelect?: (playTime: IAvailableTime) => void;
}

export const CourtAccordion: React.FC<ICourtAccordionProps> = (props) => {
  const { court, disabled, handleSelect } = props;

  return (
    <Accordion
      defaultExpanded
      disabled={disabled}
      elevation={0}
      sx={{
        paddingX: 0,
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
          <Typography variant="body1" fontSize={16} fontWeight={600}>
            {court?.title}
          </Typography>
          <Typography variant="body2" sx={{ opacity: '.7' }}>
            {court?.tags.map((tag) => tag.title).join(' · ')}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingX: 0 }}>
        <Box display="flex" gap={2} overflow="auto" pb={2}>
          {court?.options.map((option, i) => {
            return (
              <Box
                key={i}
                onClick={() => {
                  handleSelect?.(option);
                }}
                borderRadius={2}
                color="white"
                padding="10px 7px"
                textAlign="center"
                sx={{
                  background: '#6E8FFD',
                  cursor: 'pointer',
                }}
              >
                <Typography fontSize={20} fontWeight={700} whiteSpace="nowrap">
                  {option.price} RUB
                </Typography>
                <Typography>{option.playTime} мин</Typography>
              </Box>
            );
          })}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
