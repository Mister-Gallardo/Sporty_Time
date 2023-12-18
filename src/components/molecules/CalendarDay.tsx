import { Box, Typography } from '@mui/material';

export const WEEK_DAYS = ['ВС', 'ПН', 'ВТ', 'СРД', 'ЧТ', 'ПТ', 'СБ'];
export const MONTHS = [
  'Янв',
  'Февр',
  'Март',
  'Апр',
  'Май',
  'Июнь',
  'Июль',
  'Авг',
  'Сен',
  'Окт',
  'Нояб',
  'Дек',
];

export interface ICalendarDayProps {
  date: Date;
  selected?: boolean;
}
export const CalendarDay: React.FC<ICalendarDayProps> = (props) => {
  const { date, selected } = props;

  return (
    <Box
      sx={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography>{WEEK_DAYS[date.getUTCDay()]}</Typography>
      <Box
        sx={{
          background: selected ? '#0D2433' : '',
          width: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <Typography
          fontSize={18}
          sx={{ color: selected ? 'white' : 'black', padding: '7px 10px' }}
        >
          {date.getUTCDate()}
        </Typography>
      </Box>
      <Typography variant="body2">{MONTHS[date.getUTCMonth()]}</Typography>
    </Box>
  );
};
