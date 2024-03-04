import { Phone, Link } from '@mui/icons-material';
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
import { getSportName } from '../../../../helpers/getNameOf';

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

        <Typography fontSize={16}>
          Доступных кортов - {data.courts?.length}{' '}
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
