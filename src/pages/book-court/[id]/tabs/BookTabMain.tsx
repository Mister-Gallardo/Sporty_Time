import React, { useCallback, useEffect } from 'react';
import { Phone, Link } from '@mui/icons-material';
import {
  Box,
  Typography,
  IconButton,
  Chip,
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
import { getSportName } from '../../../../helpers/getNameOf';

const isMobile = isPlatform('mobile');
const weekDays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

type SceduleIntervals = { [key: number]: [] | [string, string] };

export function BookTabMain() {
  const { clubId } = useParams<{ clubId: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['club', clubId],
    queryFn: () => getClubById(Number(clubId), {}),
  });

  const getClubScedule = useCallback(() => {
    if (!data?.courts) return [];
    if (data.courts.length === 0) return [];

    const sceduleIntervals: SceduleIntervals = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    };

    for (let i = 0; i < data.courts.length; i++) {
      const singleCourtScedule = data.courts[i].schedule;

      // if court has scedule
      if (singleCourtScedule.length) {
        for (let i = 0; i < singleCourtScedule.length; i++) {
          const sceduleItem = singleCourtScedule[i];
          const day = sceduleIntervals[sceduleItem.weekDay];

          // if array has element - check dates and reassign if needed, otherwise - set value
          if (day.length) {
            const currentStart = day[0];
            const currentEnd = day[1];

            if (new Date(currentStart) > new Date(sceduleItem.startsAt)) {
              sceduleIntervals[sceduleItem.weekDay][0] = sceduleItem.startsAt;
            }
            if (new Date(currentEnd) < new Date(sceduleItem.endsAt)) {
              sceduleIntervals[sceduleItem.weekDay][1] = sceduleItem.endsAt;
            }
          } else {
            sceduleIntervals[sceduleItem.weekDay][0] = sceduleItem.startsAt;
            sceduleIntervals[sceduleItem.weekDay][1] = sceduleItem.endsAt;
          }
        }
      }
    }

    const formatScedule = Object.entries(sceduleIntervals);

    return formatScedule;
  }, [data]);

  useEffect(() => {
    getClubScedule();
  }, [data]);

  if (isLoading) return <LoadingCircle />;
  if (isError || !data) return null;

  return (
    <Box bgcolor="#fff" py={3} px={2} width="100%" maxWidth={1240} mx="auto">
      <Stack spacing={isMobile ? 2 : 3}>
        <Typography variant="h6">Информация клуба</Typography>
        {data.description && <Box>{parse(data.description)}</Box>}

        <Typography fontSize={16}>
          Доступных кортов - {data.courts?.length}
        </Typography>

        <Box>
          <Typography fontSize={16} mb={1}>
            Выды спорта:
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            pb={1}
            sx={{ overflowX: 'overlay' }}
          >
            {data.sports?.map((sport) => {
              return <Chip key={sport} label={getSportName(sport)} />;
            })}
          </Stack>
        </Box>

        <Stack direction="row" spacing={1} pb={1} sx={{ overflowX: 'overlay' }}>
          {data.tags?.map((tag) => {
            return <Chip key={tag.id} label={tag.title} />;
          })}
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={4}>
          <a
            href={data?.website || ''}
            target="_blank"
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
            {getClubScedule().length > 0 &&
              getClubScedule().map((scedule) => {
                const day = +scedule[0];

                const start = scedule[1].length
                  ? scedule[1][0].slice(-13, -8)
                  : '';
                const end = scedule[1].length
                  ? scedule[1][1].slice(-13, -8)
                  : '';

                return (
                  <ListItem key={day} disablePadding>
                    <ListItemText className="pl-timetable__item pl-dfw">
                      <b>{weekDays[day]}: </b>
                      {!start || !end ? (
                        <span>Выходной</span>
                      ) : (
                        <span>
                          {start} - {end}
                        </span>
                      )}
                    </ListItemText>
                  </ListItem>
                );
              })}
          </List>
        </Box>
      </Stack>
    </Box>
  );
}
