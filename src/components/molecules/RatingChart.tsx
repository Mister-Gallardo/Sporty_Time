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
import { getMatchBookings } from '../../services/matches/service';
import { ICurrentMatch } from '../../pages/profile/components/LevelProgression';
import { LoadingCircle } from '../atoms/LoadingCircle';

interface IRatingChartProps {
  matchesLimit: number;
  setCurrentMatch: (match: ICurrentMatch) => void;
}

export const RatingChart: React.FC<IRatingChartProps> = ({
  matchesLimit,
  setCurrentMatch,
}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['match-bookings', matchesLimit],
    queryFn: () => getMatchBookings(matchesLimit),
  });

  const bookingsList = data?.data;

  if (isError) return;

  return (
    <Box minWidth={350} width="100%" height={250} ml={-4}>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <ResponsiveContainer>
          <AreaChart
            data={bookingsList}
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
            <YAxis domain={['dataMin', 'dataMax']} axisLine={false} />
            <Area
              type="linear"
              dataKey="ratingAfterMatch"
              stroke="#768EF7"
              dot={true}
              fillOpacity={1}
              fill="url(#colorUv)"
              activeDot={{
                onClick: (_, data: any) =>
                  setCurrentMatch(data?.payload?.match),
              }}
            >
              {matchesLimit ? (
                <LabelList dataKey="ratingAfterMatch" position="insideTop" />
              ) : null}
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
};
