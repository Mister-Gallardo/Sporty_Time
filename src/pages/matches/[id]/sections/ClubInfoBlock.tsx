import { Box, IconButton, Link, Typography } from '@mui/material';
import { Block } from '../../../../components/molecules/Block';
import { IMatchBlockProps } from './interface';
import { Directions } from '@mui/icons-material';

export function ClubInfoBlock({ data }: IMatchBlockProps) {
  return (
    <Block
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Box
          component="img"
          src={data?.slot.court.club.img}
          sx={{
            width: '64px',
            height: '64px',
            background: '#e5e5e5',
            borderRadius: '7px',
            objectFit: 'cover',
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <Typography sx={{ fontWeight: '700' }}>
            {data?.slot.court.club.title}
          </Typography>
          <Box sx={{ opacity: '.6' }}>
            <Typography sx={{ fontSize: '12px' }}>
              {data?.slot.court.address}
            </Typography>
          </Box>
          <Box>
            <Link sx={{ fontSize: '.75rem' }}>More info </Link>
          </Box>
        </Box>
      </Box>
      <Box>
        <IconButton>
          <Directions sx={{ color: '#2561F8', fontSize: '2.25rem' }} />
        </IconButton>
      </Box>
    </Block>
  );
}
