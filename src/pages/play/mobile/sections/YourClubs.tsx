import { Box, Typography } from '@mui/material';
import { Block } from '../../../../components/molecules/Block';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { Button } from '../../../../components/atoms/Button';
function YourClubs() {
  return (
    <Box>
      <Typography variant="h2">Ваши клубы</Typography>
      <Block sx={{ maxWidth: '160px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            width: '50px',
            aspectRatio: '1 / 1',
            background: '#F6F6F6',
            borderRadius: '50%',
          }}
        >
          <GroupsOutlinedIcon sx={{ fontSize: '1.25rem' }} />
        </Box>
        <Typography variant="body1" sx={{ padding: '15px 0 5px 0' }}>
          Клубы не найдены
        </Typography>
        <Typography variant="body2">Рядом с вами нет клубов</Typography>
        <Button sx={{ marginTop: '1.75rem' }}>Предложить клуб</Button>
      </Block>
    </Box>
  );
}

export default YourClubs;
