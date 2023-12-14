import React from 'react';
import { TabList as MuiTabList, TabListProps } from '@mui/lab';
import { isPlatform } from '@ionic/react';
import { Tab } from '../atoms/Tab';
import { Box } from '@mui/material';

interface ITabListProps extends TabListProps {
  tabs: string[];
}

export const TabList: React.FC<ITabListProps> = ({
  tabs,
  onChange,
  children,
}) => {
  const isMobile = isPlatform('mobile');

  return (
    <Box position="sticky" top={0} bgcolor="#fff" zIndex={1}>
      <MuiTabList
        onChange={onChange}
        textColor="inherit"
        indicatorColor="primary"
      >
        {tabs.map((tabName, i) => (
          <Tab
            key={tabName}
            value={`${i + 1}`}
            disableRipple={!isMobile}
            label={tabName}
            className="default-tab"
          />
        ))}
      </MuiTabList>
      {children}
    </Box>
  );
};
