import {
  ArrowBackIosNewOutlined,
  ChatBubbleOutlineRounded,
  ErrorOutlined,
  LockOpenOutlined,
  NavigateNext,
  SportsBaseball,
  SportsTennis,
} from '@mui/icons-material';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { SwipeablePage } from '../../../components/SwipeablePage';
import matches_bg from '../../../images/matches/bgpadel_matchdetail.png';
import { Button } from '../../../components/atoms/Button';
import { IonBackButton, isPlatform } from '@ionic/react';
export function SingleMatchPage() {
  const isMobile = isPlatform('mobile');

  const renderImageSlot = () => (
    <Box sx={{ height: '100%', '*': { height: '100%' } }}>
      <Box
        sx={{ objectFit: 'cover', maxHeight: '225px' }}
        width="100%"
        component="img"
        src={matches_bg}
      />
    </Box>
  );

  const renderTopSlot = () => (
    <Box px={1} display="flex" alignItems="center">
      <IonBackButton
        text={''}
        style={{
          display: 'flex',
          width: '40px',
          color: 'black',
        }}
      >
        <ArrowBackIosNewOutlined sx={{ color: '#fff' }} />
      </IonBackButton>
      <Typography
        sx={{
          fontSize: '1.15rem',
          fontWeight: '700',
        }}
      >
        JA Ocean View Hotel Padel Tenn...
      </Typography>
    </Box>
  );

  return (
    <SwipeablePage imageSlot={renderImageSlot()} topSlot={renderTopSlot()}>
      <Box
        sx={{
          paddingTop: isMobile ? 'unset' : '1.5rem',
          minHeight: isMobile ? 'unset' : '100%',
          background: isMobile ? 'unset' : '#fff',
          width: '100%',
          paddingInline: '15px',
          margin: '-5rem auto 5.75rem auto',
        }}
      >
        <Box
          sx={{
            maxWidth: isMobile ? 'unset' : '1000px',
            width: '100%',
            margin: '0 auto',
          }}
        >
          <Box
            sx={{
              width: '100%',
              background: '#fff',
              border: '2px solid #EED790',
              borderRadius: '10px',
              padding: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.75rem',
                  paddingInline: '10px',
                }}
              >
                <SportsTennis sx={{ color: '#000', opacity: '.7' }} />
                <Box>
                  <Typography
                    sx={{
                      paddingBottom: '.2rem',
                      fontWeight: '600',
                      fontSize: '.9rem',
                    }}
                  >
                    PADEL
                  </Typography>
                  <Typography>Среда 22 ноября 20:00 - 21:30</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  width: '30px',
                  height: '30px',
                  background: '#0E2233',
                  borderRadius: '50%',
                }}
              >
                <SportsBaseball
                  sx={{ color: '#EFDB87', fontSize: '1.1rem', opacity: '.8' }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                margin: '.75rem 0 1rem 0',
                width: '100%',
                height: '1px',
                background: '#e5e5e5',
                borderRadius: '3px',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingInline: '10px',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{ fontWeight: '600', opacity: '.6', fontSize: '.85rem' }}
                >
                  Гендер
                </Typography>
                <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
                  Смешанный
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{ fontWeight: '600', opacity: '.6', fontSize: '.85rem' }}
                >
                  Уровень
                </Typography>
                <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
                  3.8 - 4.8
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{ fontWeight: '600', opacity: '.6', fontSize: '.85rem' }}
                >
                  Цена
                </Typography>
                <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
                  ₽ 3000
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem .75rem',
              marginTop: '2.5rem',
              width: '100%',
              background: '#fff',
              border: '1px #e5e5e5 solid',
              borderRadius: '10px',
            }}
          >
            <Box sx={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
              <LockOpenOutlined sx={{ color: '#000', fontSize: '1.25rem' }} />
              <Typography>Open Match</Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: '.5rem' }}>
              <Typography>✅</Typography>
              <Typography>Корт забронирован</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              padding: '1rem .75rem',

              marginBlock: '1.25rem',
              width: '100%',
              background: '#fff',
              border: '1px #e5e5e5 solid',
              borderRadius: '10px',
            }}
          >
            <Typography sx={{ fontWeight: '600', fontSize: '1rem' }}>
              Competetive
            </Typography>
            <Typography
              sx={{ fontSize: '.85rem', fontWeight: '600', opacity: '.5' }}
            >
              Результат этого матча повлияет на ваш уровень
            </Typography>
          </Box>

          <Box
            sx={{
              padding: '1rem .75rem',
              marginBlock: '1.25rem',
              width: '100%',
              background: '#fff',
              border: '1px #e5e5e5 solid',
              borderRadius: '10px',
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
                <Typography sx={{ fontWeight: '600', fontSize: '1rem' }}>
                  Попросите место в матче
                </Typography>
                <Typography
                  sx={{ fontSize: '.85rem', fontWeight: '600', opacity: '.5' }}
                >
                  Посмотрите статус игроков чтобы присоединиться к матчу
                </Typography>
              </Box>
              <IconButton
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <NavigateNext />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              padding: '1rem .75rem',
              marginBlock: '1.25rem',
              width: '100%',
              background: '#fff',
              border: '1px #e5e5e5 solid',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '.5rem',
              }}
            >
              <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>
                Игроки
              </Typography>
              <Box
                sx={{ display: 'inherit', alignItems: 'inherit', gap: '.5rem' }}
              >
                <ErrorOutlined sx={{ opacity: '.6', color: '#000' }} />
                <Typography>Out of range</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{ display: 'flex', gap: '14px', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    sx={{
                      width: '60px',
                      height: '60px',
                      border: '2px solid #EED790',
                    }}
                  />
                  <Typography>Амир</Typography>
                  <Typography>1.1</Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    sx={{
                      width: '60px',
                      height: '60px',
                      border: '2px solid #EED790',
                    }}
                  />
                  <Typography>Ramazan</Typography>
                  <Typography>1.1</Typography>
                </Box>
              </Box>
              <Box
                sx={{ width: '2px', height: '100px', background: '#e5e5e5' }}
              />
              <Box sx={{ display: 'flex', gap: '14px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    sx={{
                      width: '60px',
                      height: '60px',
                      border: '2px solid #EED790',
                    }}
                  />
                  <Typography>Владимир</Typography>
                  <Typography>1.1</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    sx={{
                      width: '60px',
                      height: '60px',
                      border: '2px solid #EED790',
                    }}
                  />
                  <Typography>Доступно</Typography>
                  <Typography></Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ maxWidth: '125px', margin: '0 auto' }}>
            <Button sx={{ height: '40px' }}>
              <ChatBubbleOutlineRounded sx={{ marginRight: '.75rem' }} />
              <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>
                Чат
              </Typography>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            position: 'fixed',
            left: '0',
            right: '0',
            bottom: '1.5rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            sx={{
              height: '45px',
              background: '#0D2432',
              borderRadius: '25px',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: '500',
              maxWidth: '350px',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
            }}
          >
            Забронировать место - ₽ 3000
          </Button>
        </Box>
      </Box>
    </SwipeablePage>
  );
}
