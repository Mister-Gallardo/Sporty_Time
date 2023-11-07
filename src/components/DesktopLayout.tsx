import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import '../desktop.css';

export interface IDesktopLayoutProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<IDesktopLayoutProps> = (props) => {
  const { children } = props;
  return (
    <BrowserRouter>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        flexShrink={0}
      >
        <Box
          sx={{
            maxWidth: 1240,
            px: { xs: 3, xl: 0 },
            width: '100%',
            flexGrow: 1,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default DesktopLayout;
