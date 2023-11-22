import { Button as MuiButton, ButtonProps } from '@mui/material';

interface IButtonProps extends ButtonProps {}

export const Button: React.FC<IButtonProps> = (props) => {
  return (
    <MuiButton
      {...props}
      sx={{
        width: '100%',
        height: '23px',
        color: props.disabled ? 'rgba(0, 0, 0, 0.4)' : '#fff',
        fontSize: '12px',
        backgroundColor: props.disabled ? '#e5e5e5' : '#2561F8',
        borderRadius: '15px',
        textTransform: 'initial',
        '&:hover': {
          backgroundColor: '#2561F8',
        },
        ...props.sx,
      }}
      fullWidth={true}
    />
  );
};
