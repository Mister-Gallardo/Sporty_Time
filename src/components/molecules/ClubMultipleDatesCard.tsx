import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { isPlatform } from '@ionic/react';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import useToggle from '../../hooks/useToggle';
import { DateBox } from './DateBox';
import { Club, IAvailableTime } from '../../services/club/interface';
import noImg from '../../images/no-image.jpg';
import { format } from 'date-fns';

type AvailableTimeItem = [string, IAvailableTime[]];

interface IClubMultipleDatesCard extends Club {
  availableTimes?: any;
}

const date = format(new Date(), 'yyyy-MM-dd');

export const ClubMultipleDatesCard: React.FC<IClubMultipleDatesCard> = ({
  id,
  title,
  images,
  availableTimes,
}) => {
  const isMobile = isPlatform('mobile');
  const history = useHistory();

  const availableTimesArray = availableTimes && Object.entries(availableTimes);
  const [eachDateIsEmpty, setEachDateIsEmpty] = useToggle();

  useEffect(() => {
    if (availableTimesArray) {
      const allSlots = availableTimesArray.map(
        (item: Array<[string, string[]]>) => item[1],
      );
      if (!allSlots.flat().length) return setEachDateIsEmpty(true);
    }
  }, [availableTimesArray]);

  const previewImg = images.length === 0 ? noImg : images[0]?.formats.large;

  return (
    <Card
      onClick={() => history.push(`/book-court/${id}?tab=2&day=${date}`)}
      sx={{
        width: '100%',
        minWidth: isMobile ? 'unset' : '400px',
        maxWidth: isMobile ? '100%' : '400px',
        boxShadow: '0px 0px 5px #e3e3e3',
        cursor: 'pointer',
      }}
    >
      <CardHeader
        avatar={
          <Box
            width={60}
            height={60}
            borderRadius={2}
            sx={{
              backgroundImage: `url(${previewImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        }
        title={title}
        titleTypographyProps={{
          fontSize: 16,
          fontWeight: 600,
          lineHeight: 1.3,
        }}
        subheaderTypographyProps={{ fontSize: 15 }}
        // subheader="2km Barcelona"
        sx={{ borderBottom: '1px solid #eee' }}
      />

      <CardContent>
        {eachDateIsEmpty ? (
          <Typography color="gray">
            На данный момент нет свободных кортов по вашему запросу
          </Typography>
        ) : (
          availableTimesArray?.map((item: AvailableTimeItem, i: number) => {
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
                  {item[1].length > 0 ? (
                    item[1].map((slot) => (
                      <DateBox
                        key={slot.time}
                        startTime={slot.time!}
                        gameDuration={slot.playTime}
                        onClick={(e: Event) => {
                          e.stopPropagation();
                          history.push(
                            `/book-court/${id}?tab=2&day=${item[0]}&time=${slot.time}`,
                          );
                        }}
                      />
                    ))
                  ) : (
                    <Typography color="gray">Нет свободных кортов</Typography>
                  )}
                </Box>
              </Box>
            );
          })
        )}
      </CardContent>
    </Card>
  );
};
