import { Box } from '@mui/material';
import DesktopHeader from './DesktopHeader';
import '../desktop.css';

export interface IDesktopLayoutProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<IDesktopLayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Box
        sx={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          paddingInline: '15px',
        }}
      >
        <DesktopHeader />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        flexShrink={0}
        sx={{ paddingTop: '5rem' }}
      >
        {children}
      </Box>
    </>
  );
};

export default DesktopLayout;
