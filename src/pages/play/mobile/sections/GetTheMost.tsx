import { Box, IconButton, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import createMatch from '../../../../images/home/img-en-play-createamatcheasytutorial.png';
import addPartner from '../../../../images/home/img-en-play-addmypartner.png';
import joinMatch from '../../../../images/home/img-en-play-joinamatchwithothers.png';
import makeReservation from '../../../../images/home/img-en-play-makeacourtreservation.png';
import premium from '../../../../images/home/img-en-play-premiumexperiences.png';
import splitPayment from '../../../../images/home/img-en-play-splitpayment.png';
import upload from '../../../../images/home/img-en-play-uploadresults.png';

function GetTheMost() {
  return (
    <>
      <Typography variant="h2">
        Получите максимальную отдачу от Tennis App
      </Typography>
      <Box
        sx={{
          // margin: '1em -100%;' /* old browsers fallback */,
          margin: '1em calc(50% - 50vw)',
        }}
      >
        <Box
          sx={{
            margin: '0 auto',
            paddingInline: '15px',
            width: '100%',
            maxWidth: '36rem',
            overflowX: 'auto',
            display: '-webkit-box',
            paddingBottom: '1rem',
            scrollSnapType: 'x mandatory',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              padding: '10px',
              width: '100%',
              maxWidth: '120px',
              height: '180px',
              background: '#000',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                top: '0',
                left: '0',
                right: '0',
                position: 'absolute',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: '10px',
              }}
              component="img"
              src={createMatch}
            />
            <Typography
              sx={{
                position: 'relative',
                zIndex: '9999',
                padding: '0',
                color: '#fff',
                fontSize: '.75rem',
              }}
              variant="body1"
            >
              How to create your own match
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                bottom: '3px',
                right: '3px',
              }}
            >
              <IconButton>
                <NavigateNextIcon sx={{ fontSize: '1.25rem', color: '#fff' }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginInline: '10px',
              width: '100%',
              maxWidth: '120px',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                padding: '10px',
                borderRadius: '10px',
                height: '85px',
                background: '#000',
              }}
            >
              <Box
                sx={{
                  top: '0',
                  left: '0',
                  right: '0',
                  position: 'absolute',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                }}
                component="img"
                src={joinMatch}
              />
              <Typography
                sx={{
                  position: 'relative',
                  zIndex: '9999',
                  padding: '0',
                  color: '#fff',
                  fontSize: '.75rem',
                }}
                variant="body1"
              >
                Join a match with others
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '3px',
                  right: '3px',
                }}
              >
                <IconButton>
                  <NavigateNextIcon
                    sx={{ fontSize: '1.25rem', color: '#fff' }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'relative',
                padding: '10px',
                borderRadius: '10px',
                height: '85px',
                background: '#000',
              }}
            >
              <Box
                sx={{
                  top: '0',
                  left: '0',
                  right: '0',
                  position: 'absolute',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                }}
                component="img"
                src={addPartner}
              />
              <Typography
                sx={{
                  position: 'relative',
                  zIndex: '9999',
                  padding: '0',
                  color: '#fff',
                  fontSize: '.75rem',
                }}
                variant="body1"
              >
                Add my partner to an Open Match
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '3px',
                  right: '3px',
                }}
              >
                <IconButton>
                  <NavigateNextIcon
                    sx={{ fontSize: '1.25rem', color: '#fff' }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
              padding: '10px',
              width: '100%',
              maxWidth: '120px',
              height: '180px',
              background: '#000',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                top: '0',
                left: '0',
                right: '0',
                position: 'absolute',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: '10px',
              }}
              component="img"
              src={makeReservation}
            />
            <Typography
              sx={{
                position: 'relative',
                zIndex: '9999',
                padding: '0',
                color: '#fff',
                fontSize: '.75rem',
              }}
              variant="body1"
            >
              Make a court reservation
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                bottom: '3px',
                right: '3px',
              }}
            >
              <IconButton>
                <NavigateNextIcon sx={{ fontSize: '1.25rem', color: '#fff' }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginInline: '10px',
              width: '100%',
              maxWidth: '120px',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                padding: '10px',
                borderRadius: '10px',
                height: '85px',
                background: '#000',
              }}
            >
              <Box
                sx={{
                  top: '0',
                  left: '0',
                  right: '0',
                  position: 'absolute',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                }}
                component="img"
                src={splitPayment}
              />
              <Typography
                sx={{
                  position: 'relative',
                  zIndex: '9999',
                  padding: '0',
                  color: '#fff',
                  fontSize: '.75rem',
                }}
                variant="body1"
              >
                Split payment
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '3px',
                  right: '3px',
                }}
              >
                <IconButton>
                  <NavigateNextIcon
                    sx={{ fontSize: '1.25rem', color: '#fff' }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'relative',
                padding: '10px',
                borderRadius: '10px',
                height: '85px',
                background: '#000',
              }}
            >
              <Box
                sx={{
                  top: '0',
                  left: '0',
                  right: '0',
                  position: 'absolute',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                }}
                component="img"
                src={premium}
              />
              <Typography
                sx={{
                  position: 'relative',
                  zIndex: '9999',
                  padding: '0',
                  color: '#fff',
                  fontSize: '.75rem',
                }}
                variant="body1"
              >
                Experience Premium
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '3px',
                  right: '3px',
                }}
              >
                <IconButton>
                  <NavigateNextIcon
                    sx={{ fontSize: '1.25rem', color: '#fff' }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
              padding: '10px',
              width: '100%',
              maxWidth: '120px',
              height: '180px',
              background: '#000',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                top: '0',
                left: '0',
                right: '0',
                position: 'absolute',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: '10px',
              }}
              component="img"
              src={upload}
            />
            <Typography
              sx={{
                position: 'relative',
                zIndex: '9999',
                padding: '0',
                color: '#fff',
                fontSize: '.75rem',
              }}
              variant="body1"
            >
              Upload results to the app
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                bottom: '3px',
                right: '3px',
              }}
            >
              <IconButton>
                <NavigateNextIcon sx={{ fontSize: '1.25rem', color: '#fff' }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default GetTheMost;
