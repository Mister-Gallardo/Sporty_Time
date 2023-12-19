import { Box, Typography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import { MatchBlock } from '../../../../components/molecules/MatchBlock';
import booking from '../../../../images/home/booking-bg.png';
import matchbg from '../../../../images/home/match-bg.png';
function PerfectMatch() {
  return (
    <Box>
      <Typography variant="h2">Найдите свою идеальную пару</Typography>
      <Box
        sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}
      >
        <MatchBlock
          href="/book-court"
          img={booking}
          title="Забронируйте корт"
          description="Если вы уже знаете, с кем играете"
          icon={
            <SearchOutlinedIcon sx={{ fontSize: '1.5rem', color: '#fff' }} />
          }
        />

        <MatchBlock
          href="/matches"
          img={matchbg}
          title="Сыграйте матч"
          description="Если вы ищете игроков своего уровня"
          icon={
            <SportsBaseballOutlinedIcon
              sx={{ fontSize: '1.5rem', color: '#fff' }}
            />
          }
        />
        <MatchBlock
          disabled
          title="Занятия"
          icon={
            <SchoolOutlinedIcon sx={{ fontSize: '1.5rem', color: '#fff' }} />
          }
        />
        <MatchBlock
          disabled
          title="Соревнования"
          icon={
            <ShieldOutlinedIcon sx={{ fontSize: '1.5rem', color: '#fff' }} />
          }
        />
      </Box>
    </Box>
  );
}

export default PerfectMatch;
