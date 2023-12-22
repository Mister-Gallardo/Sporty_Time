import { Box, CircularProgress } from '@mui/material';

export const LoadingCircle = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};
