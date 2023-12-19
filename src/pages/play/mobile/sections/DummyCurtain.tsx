import { Box, Typography } from '@mui/material';

export const DummyCurtain = () => {
  return (
    <Box
      position="absolute"
      zIndex={1}
      top={0}
      right={0}
      left={0}
      bottom={0}
      bgcolor="#eeeeee6e"
      sx={{ backdropFilter: 'blur(1px)' }}
      p={1}
    >
      <Typography color="#333" fontWeight={600} textAlign="right">
        Скоро...
      </Typography>
    </Box>
  );
};
