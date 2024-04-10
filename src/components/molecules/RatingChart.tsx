import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from 'recharts';
import { getSpecificUserMatchBookings } from '../../services/matches/service';
import { LoadingCircle } from '../atoms/LoadingCircle';
import { useParams } from 'react-router';
import { usePlayerProfile } from '../../services/api/hooks';
import { IMatchBookingData } from '../../services/matches/interface';

interface IRatingChartProps {
  matchesLimit: number;
  setCurrentMatch: (matchBooking: IMatchBookingData) => void;
}

export const RatingChart: React.FC<IRatingChartProps> = ({
  matchesLimit,
  setCurrentMatch,
}) => {
  const { userId } = useParams<{ userId: string }>();

  const [player] = usePlayerProfile();
  const myPlayerId = player?.user?.id;

  const currentUserId = userId ? userId : myPlayerId || 0;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['match-bookings', matchesLimit, userId],
    queryFn: () => getSpecificUserMatchBookings(+currentUserId, matchesLimit),
  });

  const bookingsList = data?.data;
  const reverseBookings = bookingsList && [...bookingsList].reverse();

  if (isError) return;

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
              />
              <YAxis
                domain={['dataMin', 'dataMax']}
                axisLine={false}
                onClick={() => console.log('YAxis')}
              />
              <Area
                onClick={() => console.log('Area')}
                type="linear"
                dataKey="ratingAfterMatch"
                stroke="#768EF7"
                dot={true}
                fillOpacity={1}
                fill="url(#colorUv)"
                activeDot={{
                  style: { position: 'relative', zIndex: 10000000 },
                  onClick: (_, data: any) => setCurrentMatch(data?.payload),
                }}
              >
                {matchesLimit ? (
                  <LabelList
                    dataKey="ratingAfterMatch"
                    position="insideTop"
                    onClick={() => console.log('LabelList')}
                  />
                ) : null}
              </Area>
            </AreaChart>
          </ResponsiveContainer>
        )
      )}
    </Box>
  );
};
