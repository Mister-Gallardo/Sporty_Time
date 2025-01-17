import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from 'recharts';
import { getSpecificUserMatchBookings } from '../../services/matches/service';
import { LoadingCircle } from '../atoms/LoadingCircle';
import { useParams } from 'react-router';
import { usePlayerProfile } from '../../services/api/hooks';
import { IMatchBookingData } from '../../services/matches/interface';
import { useFormContext } from 'react-hook-form';

interface IRatingChartProps {
  matchesLimit: number;
  setCurrentMatch: (matchBooking: IMatchBookingData) => void;
}

export const RatingChart: React.FC<IRatingChartProps> = ({
  matchesLimit,
  setCurrentMatch,
}) => {
  const { userId } = useParams<{ userId: string }>();

  const { watch } = useFormContext();
  const sport = watch('sport');

  const [player] = usePlayerProfile();
  const myPlayerId = player?.user?.id;

  const currentUserId = userId ? userId : myPlayerId || 0;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['match-bookings', matchesLimit, userId, sport],
    queryFn: () =>
      getSpecificUserMatchBookings(+currentUserId, matchesLimit, sport),
  });

  const bookingsList = data?.data;
  const reverseBookings = bookingsList && [...bookingsList].reverse();

  if (isError) return;

  const CustomizedDot = (props: any) => {
    if (!bookingsList) return;

    const { cx, cy, payload, index } = props;
    const isLast = index === bookingsList?.length - 1;

    const rating = payload?.ratingAfterMatch;
    if (!rating) return;

    const textX = rating?.toString().length > 1 ? 5 : 10;
    return (
      <svg x={isLast ? cx - 30 : cx - 15} y={cy - 15} width={30} height={30}>
        <g>
          <rect x="0" y="0" width={30} height={30} fill="yellow"></rect>

          <text x={textX} y={19} fontSize="13" fill="black">
            {rating}
          </text>
        </g>
      </svg>
    );
  };

  const CustomTooltip = (props: any) => {
    const { active, label } = props;
    if (!reverseBookings) return null;

    if (active) setCurrentMatch(reverseBookings[label]);
    return null;
  };

  return (
    <Box minWidth={350} width="100%" height={250}>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        bookingsList &&
        bookingsList.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={reverseBookings}
              margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="30%" stopColor="#768EF7" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#768EF7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip
                wrapperStyle={{ display: 'none' }}
                cursor={{
                  stroke: '#768EF7',
                  strokeWidth: 2,
                  strokeDasharray: '8',
                }}
                content={<CustomTooltip />}
              />
              <YAxis domain={['dataMin-0.2', 'dataMax+0.2']} axisLine={false} />

              <Area
                type="linear"
                dataKey="ratingAfterMatch"
                stroke="#768EF7"
                dot={matchesLimit !== 0 && <CustomizedDot />}
                fillOpacity={1}
                fill="url(#colorUv)"
                activeDot={matchesLimit === 0 && <CustomizedDot />}
              />
            </AreaChart>
          </ResponsiveContainer>
        )
      )}
    </Box>
  );
};
