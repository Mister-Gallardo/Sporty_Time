import { isPlatform } from '@ionic/react';
import { Tab as MuiTab, TabProps } from '@mui/material';

interface ITabProps extends TabProps {}

export const Tab: React.FC<ITabProps> = (props) => {
  const isMobile = isPlatform('mobile');

  return (
    <MuiTab
      {...props}
      sx={{
        flexGrow: 1,
        textTransform: 'initial',
        fontSize: isMobile ? 15 : 17,
        fontWeight: 600,
        color: '#000',
      }}
    />
  );
};
