import { Box, Typography } from '@mui/material';
import { Block } from './Block';
import { useHistory } from 'react-router';
import { DummyCurtain } from '../../pages/play/mobile/sections/DummyCurtain';

interface IMatchBlockProps {
  disabled?: boolean;
  img?: string;
  icon: any;
  title: string;
  description?: string;
  onClick?: () => void;
  href?: string;
}

export const MatchBlock = (props: IMatchBlockProps) => {
  const history = useHistory();

  return (
    <Block
      onClick={() => history.push(props.href || '/')}
      sx={{
        paddingTop: props.img ? '45%' : '10px',
        position: 'relative',
      }}
    >
      {props.disabled && <DummyCurtain />}

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
            objectFit: 'cover',
          }}
          src={props.img}
        />
      )}

      {/* <Box
        sx={{
          position: 'relative',
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
      </Box> */}
      <Typography
        sx={{ padding: '8px 0 5px 0', mt: 4, fontWeight: '600' }}
        variant="body1"
      >
        {props?.title}
      </Typography>
      <Typography variant="body2">{props?.description}</Typography>
    </Block>
  );
};
