import { Button, Typography, ButtonProps } from '@mui/material';

interface IdateBox extends ButtonProps {
  startTime: string;
  gameDuration?: number;
  onClick: any;
  disabled?: boolean;
}

export const DateBox = ({
  startTime,
  gameDuration,
  onClick,
  disabled,
}: IdateBox) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textTransform: 'initial',
        color: '#000',
        border: '1px solid #eee',
        borderRadius: 1,
        paddingY: 0.5,
        paddingX: 1,
        '&:disabled': {
          opacity: 0.8,
        },
      }}
    >
      <Typography whiteSpace="nowrap" fontWeight={700}>
        {startTime}
      </Typography>
      {gameDuration && (
        <Typography textAlign="center">{gameDuration}min</Typography>
      )}
    </Button>
  );
};
