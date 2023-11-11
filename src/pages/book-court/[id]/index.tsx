import { IonBackButton } from '@ionic/react';
import SwipeableViews from 'react-swipeable-views';
import {
  ArrowBackIosNewOutlined,
  FavoriteBorderOutlined,
  ShareOutlined,
} from '@mui/icons-material';
import { Box, IconButton, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { BookTab } from './BookTab';

export function SingleCourtPage() {
  const [tabIndex, setTabIndex] = useState<number>(1);

  return (
    <>
      <Box
        sx={{
          position: 'relative',

          margin: '0 auto',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            zIndex: '999',
            top: '1.5rem',
            paddingInline: '20px',
          }}
        >
          <IonBackButton
            text={''}
            style={{
              background: 'hsl(0deg 0% 89.8% / 34%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              color: '#fff',
            }}
          >
            <ArrowBackIosNewOutlined sx={{ color: '#fff' }} />
          </IonBackButton>

          <IconButton
            sx={{
              background: 'hsl(0deg 0% 89.8% / 34%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShareOutlined sx={{ color: '#fff' }} />
          </IconButton>
        </Box>
        <Box
          sx={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
          component="img"
          src="https://cdn-bojij.nitrocdn.com/JuyakZOsfCOnGAFrFDIuOkUAWlTozjCd/assets/images/optimized/rev-56fcbc3/activeaway.com/wp-content/uploads/elementor/thumbs/Padel-Tennis-Holidays-Lyttos-Beach-pqw3o7dmctox1d2xju5613xttl1wbqsi2ed1vfqcdc.jpg"
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: '9999',
            width: '100%',
            height: '100%',
            background: '#fff',
            marginTop: '-30px',
            borderRadius: '15px 15px 0 0',
            padding: '10px 0 10px 0',
          }}
        >
          <Box
            sx={{
              margin: '0 auto',
              maxWidth: '800px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ paddingInline: '10px' }}>
              <Typography
                sx={{
                  fontSize: '1.15rem',
                  fontWeight: '700',
                }}
              >
                JA Ocean View Hotel Padel Tenn...
              </Typography>
              <Typography variant="body2">JBR, Dubai</Typography>
            </Box>
            <IconButton>
              <FavoriteBorderOutlined
                sx={{ color: '#011627', fontSize: '1.75rem' }}
              />
            </IconButton>
          </Box>
          <Tabs
            sx={{ margin: '0 auto', maxWidth: '800px' }}
            value={tabIndex}
            onChange={(e, value) => setTabIndex(value)}
          >
            <Tab label={'Главная'} sx={{ flexGrow: 1 }} />
            <Tab label={'Бронь'} sx={{ flexGrow: 1 }} />
            <Tab label={'Действия'} sx={{ flexGrow: 1 }} />
          </Tabs>

          <SwipeableViews
            index={tabIndex}
            onChangeIndex={setTabIndex}
            containerStyle={{
              transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
            }}
          >
            <h1>Home</h1>
            <BookTab />
            <h1>Activities</h1>
          </SwipeableViews>
        </Box>
      </Box>
    </>
  );
}
