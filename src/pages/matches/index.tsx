import { isPlatform } from '@ionic/react';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { AvailableMatchesTab } from './AvailableMatchesTab';
import { Button } from '../../components/atoms/Button';
import { Add } from '@mui/icons-material';
import { MyMatchesTab } from './MyMatchesTab';

interface IMatchesPageProps {}

export function MatchesPage(props: IMatchesPageProps) {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const isMobile = isPlatform('mobile');

  return (
    <>
      <Box sx={{ marginTop: isMobile ? '0' : '1rem' }}>
        <Tabs
          sx={{ margin: '0 auto' }}
          value={tabIndex}
          onChange={(e, value) => setTabIndex(value)}
        >
          <Tab
            disableRipple={!isMobile}
            label={'Доступные'}
            sx={{ flexGrow: 1 }}
          />
          <Tab
            disableRipple={!isMobile}
            label={'Ваши матчи'}
            sx={{ flexGrow: 1 }}
          />
        </Tabs>

        <SwipeableViews
          action={(actions) => {
            actions.updateHeight();
          }}
          index={tabIndex}
          onChangeIndex={setTabIndex}
          containerStyle={{
            transition: isMobile
              ? 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
              : 'none',
          }}
        >
          <AvailableMatchesTab />
          <MyMatchesTab />
        </SwipeableViews>
      </Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          sx={{
            fontSize: '1.1rem',
            fontWeight: '500',
            maxWidth: '225px',
            borderRadius: '28px',
            height: '45px',
            boxShadow:
              'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
          }}
        >
          <Add />
          {tabIndex === 0 && 'Начать матч'}
          {tabIndex === 1 && 'Загрузить результат'}
        </Button>
      </Box>
    </>
  );
}
