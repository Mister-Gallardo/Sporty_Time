import { Box, Button, Typography } from '@mui/material';
import { Block } from '../../../../components/molecules/Block';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { DummyCurtain } from './DummyCurtain';

function YourClubs() {
  return (
    <Box>
      <Typography variant="h2">Ваши клубы</Typography>
      <Block
        sx={{ maxWidth: '160px', position: 'relative', overflow: 'hidden' }}
      >
        <DummyCurtain />
        <Box
          width={50}
          height={50}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#f6f6f6"
          borderRadius="50%"
          mb={2}
        >
          <FmdGoodOutlinedIcon />
        </Box>
        <Typography fontWeight={600} lineHeight={1.2} mb={1}>
          Найти ближайший от вас клуб
        </Typography>
        <Typography color="gray" lineHeight={1.2} mb={4}>
          Определить местоположение
        </Typography>
        <Button variant="contained" sx={{ borderRadius: 10, fontSize: 13 }}>
          Позволить
        </Button>
      </Block>
    </Box>
  );
}

export default YourClubs;
