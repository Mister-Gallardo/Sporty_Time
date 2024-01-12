import { Box } from '@mui/material';
import '../desktop.css';
import DesktopHeader from './DesktopHeader';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

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
        sx={{ paddingTop: '7rem' }}
      >
        {children}
      </Box>
    </>
  );
};

export default DesktopLayout;
