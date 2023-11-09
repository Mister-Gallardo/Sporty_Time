import { Box, Typography } from '@mui/material';
import { Block } from './Block';

interface IMatchBlockProps {
  img?: string;
  icon: any;
  title: string;
  description?: string;
}

export const MatchBlock = (props: IMatchBlockProps) => {
  return (
    <Block
      sx={{
        paddingTop: props.img ? '45%' : '10px',
        position: 'relative',
      }}
    >
      {props.img && (
        <Box
          component="img"
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            borderRadius: '8px 8px 0 0',
            width: '100%',
            aspectRatio: '16 / 9',
          }}
          src={props.img}
        />
      )}

      <Box
        sx={{
          position: 'relative',
          zIndex: '99999',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          aspectRatio: '1 / 1',
          background: '#0D2437',
          borderRadius: '5px',
        }}
      >
        {props?.icon}
      </Box>
      <Typography
        sx={{ padding: '8px 0 5px 0', fontWeight: '600' }}
        variant="body1"
      >
        {props?.title}
      </Typography>
      <Typography variant="body2">{props?.description}</Typography>
    </Block>
  );
};
