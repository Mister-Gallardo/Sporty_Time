import { Box, CircularProgress } from '@mui/material';

export const LoadingCircle = () => {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};
