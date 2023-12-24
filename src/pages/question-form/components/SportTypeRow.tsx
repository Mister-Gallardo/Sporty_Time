import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Box, Button, Typography } from '@mui/material';

interface ISportTypeButton {
  type: string;
  level?: number;
  icon: any;
  isActive?: boolean;
  onClick: Function;
}

export const SportTypeRow = ({
  type,
  level,
  icon,
  isActive,
  onClick,
}: ISportTypeButton) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={3}
      marginY={2}
    >
      <Button
        onClick={() => onClick()}
        startIcon={icon}
        sx={{
          textTransform: 'capitalize',
          paddingX: 2,
          border: '1px solid #fff',
          color: isActive ? '#000' : '#fff',
          backgroundColor: isActive ? '#fff' : 'transparent',
          borderRadius: 20,

          '&.MuiButtonBase-root:hover': {
            color: '#000',
            backgroundColor: '#fff',
          },
        }}
      >
        {type.toLowerCase()}
      </Button>
      {isActive && !!level && (
        <Box display="flex" alignItems="center" gap={1.5}>
          <Typography whiteSpace="nowrap">Level {level}</Typography>
          <CheckOutlinedIcon />
        </Box>
      )}
    </Box>
  );
};
