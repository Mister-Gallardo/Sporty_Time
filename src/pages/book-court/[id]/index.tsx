import { IonBackButton, IonToggle } from '@ionic/react';
import {
  ArrowBackIosNewOutlined,
  FavoriteBorderOutlined,
  KeyboardArrowUp,
  NotificationsOutlined,
  ShareOutlined,
  SportsTennis,
} from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

export function SingleCourtPage() {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          // maxWidth: '410px',
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
          sx={{ width: '100%' }}
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
            padding: '10px 12px 0 10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
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
          <Box
            sx={{
              padding: '10px 17px',
              background: '#f4f4f4',
              margin: '1.75em calc(50% - 50vw) 0 calc(50% - 50vw)',
              paddingBlock: '1.25rem',
            }}
          >
            <Box sx={{ display: 'flex', gap: '1.5rem' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',

                  width: '60px',
                  height: '90px',
                  border: '1px solid #000',
                  background: '#fff',
                  borderRadius: '10px',
                }}
              >
                <SportsTennis sx={{ fontSize: '1.5rem' }} />
              </Box>
              <Box sx={{ display: 'flex', gap: '18px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography>ЧЕТ</Typography>
                  <Box
                    sx={{
                      background: '#0D2433',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                    }}
                  >
                    <Typography sx={{ color: '#fff', padding: '7px 10px' }}>
                      02
                    </Typography>
                  </Box>
                  <Typography variant="body2">Nov</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography>ПЯТ</Typography>
                  <Box
                    sx={{
                      background: '#0D2433',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                    }}
                  >
                    <Typography sx={{ color: '#fff', padding: '7px 10px' }}>
                      03
                    </Typography>
                  </Box>
                  <Typography variant="body2">Nov</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography>СУБ</Typography>
                  <Box
                    sx={{
                      background: '#0D2433',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                    }}
                  >
                    <Typography sx={{ color: '#fff', padding: '7px 10px' }}>
                      04
                    </Typography>
                  </Box>
                  <Typography variant="body2">Nov</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography>ВОС</Typography>
                  <Box
                    sx={{
                      background: '#0D2433',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                    }}
                  >
                    <Typography sx={{ color: '#fff', padding: '7px 10px' }}>
                      05
                    </Typography>
                  </Box>
                  <Typography variant="body2">Nov</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography>ПОН</Typography>
                  <Box
                    sx={{
                      background: '#0D2433',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                    }}
                  >
                    <Typography sx={{ color: '#fff', padding: '7px 10px' }}>
                      06
                    </Typography>
                  </Box>
                  <Typography variant="body2">Nov</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBlock: '.5rem',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '.9rem',
                  color: '#4c4c4c',
                  fontWeight: '500',
                }}
              >
                Показать только свободные слоты
              </Typography>
              <IonToggle checked enableOnOffLabels />
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '1.25rem',
                marginTop: '10px',
                flexWrap: 'wrap',
              }}
            >
              <Box
                sx={{
                  background: '#0D2433',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid #0D2433',
                  borderRadius: '5px',
                  color: '#fff',
                }}
              >
                10:00
              </Box>
              <Box
                sx={{
                  background: '#fff',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                }}
              >
                10:30
              </Box>
              <Box
                sx={{
                  background: '#fff',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                }}
              >
                11:00
              </Box>
              <Box
                sx={{
                  background: '#fff',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                }}
              >
                11:30
              </Box>
              <Box
                sx={{
                  background: '#fff',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                }}
              >
                12:00
              </Box>
              <Box
                sx={{
                  background: '#fff',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                }}
              >
                12:30
              </Box>
              <Box
                sx={{
                  background: '#fff',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                }}
              >
                13:00
              </Box>
              <Box
                sx={{
                  background: '#fff',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                }}
              >
                13:30
              </Box>
              <Box
                sx={{
                  background: '#fff',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                }}
              >
                14:00
              </Box>
              <Box
                sx={{
                  background: '#fff',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                }}
              >
                14:30
              </Box>
              <Box
                sx={{
                  background: '#fff',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                }}
              >
                15:00
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: '1.25rem',
                width: '100%',
                background: '#fff',
                boxShadow:
                  'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
                borderRadius: '10px',
              }}
            >
              <Box sx={{ padding: '10px 20px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    paddingBottom: '.75rem',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: '.8',
                      width: '35px',
                      height: '35px',
                      background: '#F1F4F6',
                      borderRadius: '50%',
                    }}
                  >
                    <NotificationsOutlined />
                  </Box>
                  <Typography sx={{ fontSize: '.9rem', fontWeight: '600' }}>
                    Приоритетные оповещения
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ maxWidth: '70%' }}>
                    Configure your alert in one click with your predefined
                    filters
                  </Typography>
                  <IonToggle enableOnOffLabels />
                </Box>
                <Typography
                  sx={{
                    fontSize: '.9rem',
                    fontWeight: '700',
                    color: '#3765ea',
                    paddingTop: '.5rem',
                  }}
                >
                  Настройка оповещений
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: '1rem' }}>
              <Typography
                sx={{
                  fontSize: '1.15rem',
                  fontWeight: '700',
                }}
              >
                Забронировать корт
              </Typography>
              <Typography variant="body2">
                Cоздайте приватный матч, куда вы сможете пригласить своих друзец
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="body1">
                Показывать только доступные корты
              </Typography>
              <IonToggle enableOnOffLabels />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: '.95rem', fontWeight: '600' }}
                >
                  Padel 1
                </Typography>
                <Typography variant="body2" sx={{ opacity: '.7' }}>
                  Outdoor | Crystal | Double
                </Typography>
              </Box>
              <IconButton sx={{ marginTop: '.5rem' }}>
                <KeyboardArrowUp sx={{ fontSize: '2rem' }} />
              </IconButton>
            </Box>
            <Box sx={{ marginTop: '1rem', display: 'flex', gap: '1.25rem' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',

                  width: '100%',
                  maxWidth: '125px',
                  padding: '10px 7px',
                  background: '#6E8FFD',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              >
                <Typography sx={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  240 AED
                </Typography>
                <Typography>90 мин</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',

                  width: '100%',
                  maxWidth: '125px',
                  padding: '10px 7px',
                  background: '#6E8FFD',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              >
                <Typography sx={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  400 AED
                </Typography>
                <Typography>120 мин</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
