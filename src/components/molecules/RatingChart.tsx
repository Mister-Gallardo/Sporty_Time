import { Box } from '@mui/material';
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

export const DEMO_DATA = [
  {
    name: 'Page A',
    uv: 1.23,
  },
  {
    name: 'Page B',
    uv: 1.11,
  },
  {
    name: 'Page C',
    uv: 1.3,
  },
  {
    name: 'Page D',
    uv: 1.35,
  },
  {
    name: 'Page E',
    uv: 1.39,
  },
  {
    name: 'Page F',
    uv: 1.45,
  },
  {
    name: 'Page G',
    uv: 1.4,
  },
];

export const RatingChart: React.FC = () => {
  return (
    <Box width="100%" height={300}>
      <ResponsiveContainer>
        <AreaChart
          data={DEMO_DATA}
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
            cursor={{ stroke: '#768EF7', strokeWidth: 2, strokeDasharray: '8' }}
          />
          <YAxis domain={['dataMin', 'dataMax']} axisLine={false} />
          <Area
            type="linear"
            dataKey="uv"
            stroke="#768EF7"
            dot={true}
            fillOpacity={1}
            fill="url(#colorUv)"
          >
            <LabelList dataKey="uv" position="insideTop" />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
