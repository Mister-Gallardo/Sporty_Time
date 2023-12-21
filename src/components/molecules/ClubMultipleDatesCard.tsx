import { useHistory } from 'react-router';
import { isPlatform } from '@ionic/react';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { CourtSlot } from '../../services/club/interface';
import { DateBox } from './DateBox';

interface Slot {
  time: string;
  slotId: number;
  playTime: number;
}

type AvailableTimeItem = [string, Slot[]];

interface IClubMultipleDatesCard {
  title: string;
  img: string;
  availableTimes?: any;
}

const date = new Date().toLocaleDateString('en-ca');

export const ClubMultipleDatesCard: React.FC<IClubMultipleDatesCard> = ({
  title,
  img,
  availableTimes,
}) => {
  const isMobile = isPlatform('mobile');
  const history = useHistory();

  const availableTimesArray = availableTimes && Object.entries(availableTimes);

  return (
    <Card
      onClick={() => history.push(`/book-court/1?tab=2&day=${date}`)}
      sx={{
        maxWidth: isMobile ? '100%' : '400px',
        boxShadow: '0px 0px 5px #e3e3e3',
      }}
    >
      <CardHeader
        avatar={
          <Box
            width={60}
            height={60}
            borderRadius={2}
            sx={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        }
        title={title}
        titleTypographyProps={{ fontSize: 18, fontWeight: 700 }}
        subheaderTypographyProps={{ fontSize: 16 }}
        subheader="2km Barcelona"
        sx={{ borderBottom: '1px solid #eee' }}
      />

      <CardContent>
        {availableTimesArray?.map((item: AvailableTimeItem, i: number) => {
          const rowDate = new Date(item[0]);

          return (
            <Box key={i}>
              <Typography fontWeight={700} mb={1}>
                {`${rowDate.getDate()} ${rowDate.toLocaleString('ru', {
                  month: 'short',
                })}`}
              </Typography>
              <Box
                display="flex"
                gap={2}
                pb={1.2}
                overflow="auto"
                sx={{
                  scrollSnapType: 'x mandatory',
                  scrollBehavior: 'smooth',
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                {item[1].length > 0 &&
                  item[1].map((slot: CourtSlot) => (
                    <DateBox
                      key={slot.slotId}
                      startTime={slot.time}
                      gameDuration={slot.playTime}
                      onClick={(e: Event) => {
                        e.stopPropagation();
                        history.push(
                          `/book-court/1?tab=2&day=${item[0]}&time=${slot.time}`,
                        );
                      }}
                    />
                  ))}
              </Box>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};
