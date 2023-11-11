import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import '../desktop.css';
import DesktopHeader from './DesktopHeader';

export interface IDesktopLayoutProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<IDesktopLayoutProps> = (props) => {
  const { children } = props;
  return (
    <BrowserRouter>
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
      >
        {children}
      </Box>
    </BrowserRouter>
  );
};

export default DesktopLayout;
