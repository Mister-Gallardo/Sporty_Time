import { Box } from '@mui/material';
import DesktopHeader from './DesktopHeader';
import '../desktop.css';
import { Router } from 'react-router';
import { history } from '../services/history/service';

export interface IDesktopLayoutProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<IDesktopLayoutProps> = (props) => {
  const { children } = props;

  return (
    <Router history={history}>
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
    </Router>
  );
};

export default DesktopLayout;
