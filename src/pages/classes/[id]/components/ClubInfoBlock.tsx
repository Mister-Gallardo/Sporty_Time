import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const ClubInfoBlock = () => {
  return (
    <Link to="/book-court/18?tab=1">
      <Box border="1px solid #eee" p={1.5} display="flex" gap={2}>
        <Box component="img" width={90} height={90} flexShrink={0} />
        <Box>
          <Typography fontWeight={600}>Title</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
