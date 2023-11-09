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
        {children}
      </Box>
    </BrowserRouter>
  );
};

export default DesktopLayout;
