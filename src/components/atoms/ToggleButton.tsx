import { ToggleButton as MuiButton, ToggleButtonProps } from '@mui/material';

interface IToggleButtonProps extends ToggleButtonProps {
  active?: boolean;
}

export const ToggleButton: React.FC<IToggleButtonProps> = (props) => {
  return (
    <MuiButton
      {...props}
      sx={{
        width: 'auto',
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '14px',
        padding: '5px 13px',
        border: '1px solid #e5e5e5',
        borderRadius: '50px',
        textTransform: 'initial',
        whiteSpace: 'nowrap',
        color: '#4b4b4b',
        backgroundColor: '#fff',

        '&:hover': {
          backgroundColor: '#eee',
        },
        '&:disabled': {
          borderColor: '#eee',
          backgroundColor: '#fff',
          color: '#a0a0a0',
        },
        '&.Mui-selected, &.Mui-selected:hover': {
          borderColor: '#eee',
          backgroundColor: '#0d2432',
          color: '#fff',
        },
        '&.Mui-selected:disabled': {
          borderColor: '#eee',
          backgroundColor: '#a0a0a0',
          color: '#fff',
        },
        '&.MuiToggleButtonGroup-grouped:not(:first-of-type),&.MuiToggleButtonGroup-grouped:not(:last-of-type)':
          {
            border: '1px solid #e5e5e5',
            borderRadius: '50px',
          },
        ...props.sx,
      }}
    />
  );
};
