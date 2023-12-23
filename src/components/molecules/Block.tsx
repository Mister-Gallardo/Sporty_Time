import { Paper as MuiPaper, PaperProps } from '@mui/material';

interface IBlockProps extends PaperProps {
  to?: string;
}

export const Block: React.FC<IBlockProps> = (props) => {
  return (
    <MuiPaper
      {...props}
      sx={{
        width: '100%',
        padding: '15px',
        borderRadius: '10px',
        boxShadow:
          'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        ...props.sx,
      }}
    />
  );
};
