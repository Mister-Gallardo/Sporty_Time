import { Box, IconButton, Typography } from '@mui/material';
import SportsTennisOutlinedIcon from '@mui/icons-material/SportsTennisOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Block } from '../../../../components/molecules/Block';
function RememberSection() {
  return (
    <Box>
      <Typography variant="h2">Помните...</Typography>
      <Block
        sx={{
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            aspectRatio: '1/1',
            background: '#fff',
            borderRadius: '5px',
          }}
        >
          <SportsTennisOutlinedIcon
            sx={{ fontSize: '1.25rem', color: '#434343' }}
          />
        </Box>
        <Box>
          <Typography variant="body1">
            Редактируйте ваши предпочтения
          </Typography>
          <Typography variant="body2">
            Лучшая рука, сторона корта, тип ма...
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <NavigateNextIcon sx={{ fontSize: '1.25rem' }} />
          </IconButton>
        </Box>
      </Block>
    </Box>
  );
}

export default RememberSection;
