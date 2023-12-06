import { Typography } from '@mui/material';
import { Block } from '../../../../components/molecules/Block';
import { IMatchBlockProps } from './interface';

export function MatchLevelBlock({ data }: IMatchBlockProps) {
  return (
    <Block
      sx={{
        marginBlock: '1.25rem',
      }}
    >
      <Typography sx={{ fontWeight: '600', fontSize: '1rem' }}>
        {data?.type}
      </Typography>
      <Typography sx={{ fontSize: '.85rem', fontWeight: '600', opacity: '.5' }}>
        Результат этого матча повлияет на ваш уровень
      </Typography>
    </Block>
  );
}
