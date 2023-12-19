import { Box, Typography } from '@mui/material';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';

function MobileHeader() {
  return (
    <Box bgcolor="#fff" display="flex" alignItems="center" gap={1.5} px="15px">
      <SportsBaseballOutlinedIcon />
      <Typography
        variant="h1"
        fontSize={17}
        textTransform="uppercase"
        letterSpacing={4}
        fontWeight={600}
      >
        sportytime
      </Typography>
    </Box>
  );
}

export default MobileHeader;
