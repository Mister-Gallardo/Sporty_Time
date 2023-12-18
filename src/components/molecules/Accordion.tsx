import { ExpandMore } from '@mui/icons-material';
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  AccordionProps,
} from '@mui/material';

interface IAccordion extends AccordionProps {
  title: string;
  description: string;
}

export const Accordion: React.FC<IAccordion> = ({
  title,
  description,
  children,
}) => {
  return (
    <MuiAccordion
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
            {title}
          </Typography>
          <Typography sx={{ fontSize: '.8rem' }}>{description}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>{children}</AccordionDetails>
    </MuiAccordion>
  );
};
