import { IonToggle } from '@ionic/react';
import {
  KeyboardArrowUp,
  NotificationsOutlined,
  SportsTennis,
  Accessible, ArrowBack, Directions, FavoriteBorder, Icecream, Link, LocalMall, LocalOffer, LocalParking, Lock, Phone, Shower, Upload
} from '@mui/icons-material';

import { Box, Typography, IconButton, Button, Chip, Divider, List, ListItem, ListItemText, Stack } from '@mui/material';
import { Avatar } from '../../../components/molecules/Avatar';
import { ResultCard } from '../../../components/molecules/ResultCard';

export function BookTabMain() {
  return (
    <Box
      sx={{
        padding: '10px 17px',
        background: '#f4f4f4',
        paddingBlock: '1.25rem',
      }}
    >
      <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
        <Typography variant='h4' sx={{
          width: '100%',
          fontSize: 18,
          marginTop: '10px',
          marginBottom: '20px',
        }}>Club information</Typography>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <SportsTennis sx={{ marginRight: "10px" }} />
            <span>Padel</span>
          </Box>
        </Box>
        <Typography sx={{ width: "100%", fontSize: "16px", color: "#4b4b4b" }}>1 Avaliable counts</Typography>
        <Stack direction="row" spacing={1} sx={{ overflowX: 'overlay' }}>
          <Chip icon={<Accessible />} label="Special access"></Chip>
          <Chip icon={<Icecream />} label="Snack bar"></Chip>
          <Chip icon={<LocalMall />} label="Store"></Chip>
          <Chip icon={<Lock />} label="Locker"></Chip>
          <Chip icon={<Shower />} label="Changing rooms"></Chip>
        </Stack>
        <Box sx={{
          display: 'flex',
          width: "100%",
          justifyContent: "space-around",
          marginTop: "20px",
          marginBottom: "20px"
        }}>
          <Box sx={{ textAlign: "center" }}>
            <IconButton color='primary' sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: "60px",
              height: "60px",
              border: "1px solid #e1e1e1",
              borderRadius: "50%",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "rgb(238 238 238 / 50%)"
            }}><Directions /></IconButton>
            <span>Directions</span>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <IconButton sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: "60px",
              height: "60px",
              border: "1px solid #e1e1e1",
              borderRadius: "50%",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "rgb(238 238 238 / 50%)"
            }}><Link /></IconButton>
            <span>Web</span>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <IconButton sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: "60px",
              height: "60px",
              border: "1px solid #e1e1e1",
              borderRadius: "50%",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "rgb(238 238 238 / 50%)"
            }}><Phone /></IconButton>
            <span>Call</span>
          </Box>
        </Box>
        <Box sx={{
          width: "100%",
          height: "300px",
          backgroundColor: "#757575",
          marginBottom: "20px"
        }}></Box>
        <Typography variant='h4' sx={{
          width: "100%",
          fontSize: "18px",
          marginTop: "10px",
          marginBottom: "20px"
        }}>Opening hours</Typography>
        <List sx={{ width: '100%' }}>
          <ListItem disablePadding>
            <ListItemText className='pl-timetable__item pl-dfw'>
              <span>Monday-Sunday</span>
              <span>09:00 - 00:00</span>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemText className='pl-timetable__item pl-dfw'>
              <span>* Holidays:</span>
              <span>09:00 - 22:00</span>
            </ListItemText>
          </ListItem>
        </List>
        <Box sx={{ width: "100%", justifyContent: "space-between", alignItems: "center", display: 'flex', flexWrap: 'wrap' }}>
          <Typography variant='h4' sx={{
            width: "70%",
            fontSize: "18px",
            marginTop: "10px",
            marginBottom: "20px"
          }}>Padel ranking</Typography>
          <a href="#" style={{
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "uppercase",
            textDecoration: "none"
          }}>See all</a>
        </Box>
        <Box sx={{ width: "100%", marginBottom: "40px", display: 'flex', overflowX: 'overlay' }}>
          <Avatar img='' name='Tomas' rate="2"></Avatar>
          <Avatar img='' name='Tomas' rate="2"></Avatar>
          <Avatar img='' name='Tomas' rate="2"></Avatar>
          <Avatar img='' name='Tomas' rate="2"></Avatar>
          <Avatar img='' name='Tomas' rate="2"></Avatar>
          <Avatar img='' name='Tomas' rate="2"></Avatar>
        </Box>
        <Typography variant='h4' sx={{
          width: "100%",
          fontSize: "18px",
          marginTop: "10px",
          marginBottom: "20px"
        }}>Recent results</Typography>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          overflowX: 'overlay',
          width: '100%',
          marginBottom: '40px'
        }} >
          <Box sx={{width: 'max-content', display: 'flex'}}>
            <ResultCard/>
            <ResultCard/>
          </Box>
        </Box>
        <Typography variant='h4' sx={{
          width: "100%",
          fontSize: "18px",
          marginTop: "10px",
          marginBottom: "20px"
        }}>Do you have an account at this club?</Typography>
        <p style={{
          margin: "0",
          marginBottom: "20px",
          color: "#4b4b4b",
          fontSize: "16px"
        }}>Link your account and get club benefits</p>
        <Button variant="outlined" sx={{
          marginBottom: "40px",
          width: "100%",
          borderRadius: "25px",
          WebkitBorderRadius: "25px",
          MozBorderRadius: "25px",
          msBorderRadius: "25px",
          OBorderRadius: "25px"
        }
        } color='info' size="medium">
          Link account
        </Button>
      </Box>
    </Box >
  );
}
