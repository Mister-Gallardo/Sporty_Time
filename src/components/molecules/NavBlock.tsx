import { Box, Typography } from '@mui/material';
import { Block } from './Block';
import { useHistory } from 'react-router';

interface INavBlockProps {
  img?: string;
  icon?: any;
  title: string;
  description?: string;
  href: string;
}

export const NavBlock: React.FC<INavBlockProps> = ({
  img,
  icon,
  title,
  description,
  href,
}) => {
  const history = useHistory();

  return (
    <Block
      onClick={() => history.push(href)}
      sx={{
        paddingTop: img ? 14 : '10px',
        position: 'relative',
      }}
    >
      {img && (
        <Box
          component="img"
          sx={{
            height: 100,
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            aspectRatio: '16 / 9',
            objectFit: 'cover',
          }}
          src={img}
        />
      )}

      <Box display="flex" alignItems="center" gap={1}>
        {icon && (
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              aspectRatio: '1 / 1',
              background: '#0D2437',
            }}
          >
            {icon}
          </Box>
        )}
        <Box>
          <Typography fontWeight={600} fontSize={13}>
            {title}
          </Typography>
          {description && (
            <Typography variant="body2">{description}</Typography>
          )}
        </Box>
      </Box>
    </Block>
  );
};
