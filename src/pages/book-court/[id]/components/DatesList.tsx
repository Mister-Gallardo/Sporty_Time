import { Box } from '@mui/material';
import { CalendarDay } from '../../../../components/molecules/CalendarDay';
import { format } from 'date-fns';
import { useSearchParam } from '../../../../hooks/useSearchParams';
import { getDatesList } from '../../../../helpers/getDatesList';
import { SportsTennis } from '@mui/icons-material';

const dates = getDatesList(100);

export const DatesList = () => {
  const [date, setSelectedDate] = useSearchParam(
    'day',
    format(new Date(), 'yyyy-MM-dd'),
  );
  const selectedDate = new Date(date);

  return (
    <Box display="flex" gap="1.5rem">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
        width={60}
        height={90}
        border="1px solid #000"
      >
        <SportsTennis />
      </Box>
      <Box display="flex" gap={2} overflow="auto">
        {dates.map((date, i) => {
          if (selectedDate.toString() === 'Invalid Date') return;

          return (
            <CalendarDay
              key={i}
              onSelect={() => {
                setSelectedDate(format(new Date(date), 'yyyy-MM-dd'));
              }}
              date={date}
              selected={selectedDate.toISOString() === date.toISOString()}
            />
          );
        })}
      </Box>
    </Box>
  );
};
