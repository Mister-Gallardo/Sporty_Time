import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { isPlatform } from '@ionic/react';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import useToggle from '../../hooks/useToggle';
import { DateBox } from './DateBox';
import noImage from '../../images/no-image.jpg';
import { IAvailableTime } from '../../services/club/interface';

type AvailableTimeItem = [string, IAvailableTime[]];

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
  const [eachDateIsEmpty, setEachDateIsEmpty] = useToggle();

  useEffect(() => {
    if (availableTimesArray) {
      const allSlots = availableTimesArray.map(
        (item: Array<[string, string[]]>) => item[1],
      );
      if (!allSlots.flat().length) return setEachDateIsEmpty(true);
    }
  }, [availableTimesArray]);

  return (
    <Card
      onClick={() => history.push(`/book-court/1?tab=2&day=${date}`)}
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
              backgroundImage: `url(${img ? img : noImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        }
        title={title}
        titleTypographyProps={{
          fontSize: 18,
          fontWeight: 700,
          lineHeight: 1.3,
        }}
        subheaderTypographyProps={{ fontSize: 16 }}
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
                            `/book-court/1?tab=2&day=${item[0]}&time=${slot.time}`,
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
