import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import TransgenderOutlinedIcon from '@mui/icons-material/TransgenderOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { isPlatform } from '@ionic/react';

const isMobile = isPlatform('mobile');

export const ClassCard = () => {
  return (
    <Box
      border="1px solid #eee"
      width="100%"
      maxWidth={isMobile ? 'unset' : 350}
    >
      <Link to="/classes/1">
        <Box
          p={1.5}
          borderBottom="1px solid #eee"
          display="flex"
          alignItems="center"
        >
          <Stack alignItems="center" px={3}>
            <Avatar sx={{ width: 50, height: 50 }} />
            <Typography mt={1} fontSize={13} color="gray">
              Sport
            </Typography>
            <Typography>Занятие</Typography>
          </Stack>
          <Divider flexItem variant="fullWidth" orientation="vertical" />
          <Box px={1}>
            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              color="gray"
              textTransform="uppercase"
            >
              <Typography fontSize={10}>day</Typography>
              <span>&#183;</span>
              <Typography fontSize={10}>data</Typography>
              <span>&#183;</span>
              <Typography fontSize={10}>time</Typography>
            </Box>
            <Typography mb={2} fontSize={16} fontWeight={600}>
              Title Title Title
            </Typography>
            <Box
              mb={1}
              display="flex"
              alignItems="center"
              color="gray"
              gap={0.5}
            >
              <FmdGoodOutlinedIcon fontSize="small" color="disabled" />
              <Typography>distance</Typography>
              <span>&#183;</span>
              <Typography>Location</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={3}>
              <Box display="flex" alignItems="center" gap={0.5}>
                <SignalCellularAltOutlinedIcon
                  fontSize="small"
                  color="disabled"
                />
                <Typography>0</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5}>
                <TransgenderOutlinedIcon fontSize="small" color="disabled" />
                <Typography>mixed</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          px={1.5}
          py={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Box display="flex">
              {[1, 2, 3, 4].map((slot, i) => {
                return (
                  <Box
                    key={slot}
                    border="1px solid blue"
                    width={30}
                    height={30}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    ml={i !== 0 ? -1 : 'unset'}
                    bgcolor="#fff"
                  >
                    <AddIcon color="info" />
                  </Box>
                );
              })}
            </Box>
            <Typography color="gray" fontSize={13}>
              0/4
            </Typography>
          </Box>
          <Button variant="contained" sx={{ fontSize: 13, px: 1, py: 0.2 }}>
            Присоединиться - $30
          </Button>
        </Box>
      </Link>
    </Box>
  );
};
