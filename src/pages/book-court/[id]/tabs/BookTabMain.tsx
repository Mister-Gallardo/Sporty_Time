import React from 'react';
import {
  SportsTennis,
  Accessible,
  Icecream,
  LocalMall,
  Lock,
  Phone,
  Shower,
  Link,
} from '@mui/icons-material';

import {
  Box,
  Typography,
  IconButton,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getClubById } from '../../../../services/club/service';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';
import { isPlatform } from '@ionic/react';
import { CustomClubMap } from '../../../../components/molecules/CustomClubMap';
import parse from 'html-react-parser';

const isMobile = isPlatform('mobile');

export function BookTabMain() {
  const { clubId } = useParams<{ clubId: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['club', clubId],
    queryFn: () => getClubById(Number(clubId), {}),
  });

  if (isLoading) return <LoadingCircle />;
  if (isError || !data) return null;

  return (
    <Box bgcolor="#fff" py={3} px={2} width="100%" maxWidth={1240} mx="auto">
      <Stack spacing={isMobile ? 2 : 3}>
        <Typography variant="h6">Информация клуба</Typography>
        {data.description && <Typography>{parse(data.description)}</Typography>}
        <Box>
          <Stack direction="row" spacing={2}>
            <SportsTennis />
            <Typography fontWeight={600} color="#333">
              Padel
            </Typography>
          </Stack>
        </Box>
        <Typography>4 Доступных корта</Typography>
        <Stack direction="row" spacing={1} sx={{ overflowX: 'overlay' }}>
          <Chip icon={<Accessible />} label="Special access"></Chip>
          <Chip icon={<Icecream />} label="Snack bar"></Chip>
          <Chip icon={<LocalMall />} label="Store"></Chip>
          <Chip icon={<Lock />} label="Locker"></Chip>
          <Chip icon={<Shower />} label="Changing rooms"></Chip>
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={4}>
          <a
            href={data?.website || ''}
            style={{ pointerEvents: data?.website ? 'all' : 'none' }}
          >
            <Stack alignItems="center">
              <IconButton
                sx={{
                  width: 55,
                  height: 55,
                  border: '1px solid #262d58',
                }}
              >
                <Link />
              </IconButton>
              <Typography>Веб-сайт</Typography>
            </Stack>
          </a>
          <a
            href={`tel:${data?.phoneNumber?.replace(/[()\s]/g, '')}`}
            style={{ pointerEvents: data?.phoneNumber ? 'all' : 'none' }}
          >
            <Stack alignItems="center">
              <IconButton
                sx={{
                  width: 55,
                  height: 55,
                  border: '1px solid #262d58',
                }}
              >
                <Phone />
              </IconButton>
              <Typography>Позвонить</Typography>
            </Stack>
          </a>
        </Stack>

        <CustomClubMap />

        <Box>
          <Typography variant="h6">График работы:</Typography>
          <List sx={{ width: '100%' }}>
            <ListItem disablePadding>
              <ListItemText className="pl-timetable__item pl-dfw">
                <span>Понедельник - Воскресенье: </span>
                <span>09:00 - 00:00</span>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemText className="pl-timetable__item pl-dfw">
                <span>* Праздники: </span>
                <span>09:00 - 22:00</span>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Box>
  );
}
