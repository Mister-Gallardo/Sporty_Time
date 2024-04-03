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

const fakeData = [
  {
    id: 10033,
    paid: 20000,
    matchResults: [
      [4, 6],
      [4, 6],
      [7, 5],
    ],
    confirmMatchResults: true,
    team: 'A',
    ratingAfterMatch: 2.5,
    ratingProfit: 0,
    createdAt: '2024-02-04T14:05:09.526Z',
    updatedAt: '2024-03-14T14:17:12.797Z',
    match: {
      id: 10033,
      price: 20000,
      isPrivate: false,
      isCancelled: false,
      sport: 'PADEL',
      gender: 'ALL',
      matchResults: null,
      confirmMatchResults: true,
      winningTeam: null,
      type: 'COMPETITIVE',
      ratingFrom: 1.25,
      ratingTo: 2.25,
      timeExpires: '2024-02-08T09:00:00.000Z',
      isApproved: true,
      createdAt: '2024-02-04T14:05:09.526Z',
      updatedAt: '2024-02-08T09:00:05.544Z',
      matchBookings: [
        {
          id: 10033,
          paid: 20000,
          matchResults: [
            [4, 6],
            [4, 6],
            [7, 5],
          ],
          confirmMatchResults: true,
          team: 'A',
          ratingAfterMatch: 0,
          ratingProfit: 0,
          createdAt: '2024-02-04T14:05:09.526Z',
          updatedAt: '2024-03-14T14:17:12.797Z',
          player: {
            id: 55,
            ratingPadel: 2.55,
            ratingTennis: 4.5,
            ratingPickleball: 1.5,
            padelTestResults: null,
            tennisTestResults: null,
            pickleballTestResults: null,
            createdAt: '2023-12-04T07:28:32.741Z',
            updatedAt: '2024-04-03T09:47:50.834Z',
            user: {
              id: 58,
              firstname: 'Treeh',
              lastname: 'Lastname',
              fullname: 'Treeh Lastname',
              email: 'kanapatskayaLiza@gmail.com',
              phone: null,
              roles: ['PLAYER', 'USER', 'ADMIN', 'CLUB_OWNER'],
              gender: 'FEMALE',
              createdAt: '2023-12-04T07:28:32.741Z',
              updatedAt: '2024-03-18T14:40:08.613Z',
              deletedAt: null,
            },
          },
        },
      ],
      totalPaid: 20000,
      paid: true,
    },
  },
  {
    id: 10029,
    paid: 8000,
    matchResults: [
      [4, 6],
      [4, 6],
      [7, 5],
    ],
    confirmMatchResults: true,
    team: 'A',
    ratingAfterMatch: 2.8,
    ratingProfit: 0,
    createdAt: '2024-02-04T09:15:58.588Z',
    updatedAt: '2024-03-14T14:17:12.797Z',
    match: {
      id: 10029,
      price: 8000,
      isPrivate: false,
      isCancelled: false,
      sport: 'PADEL',
      gender: 'ALL',
      matchResults: [
        [6, 3],
        [3, 6],
        [6, 3],
      ],
      confirmMatchResults: true,
      winningTeam: 'A',
      type: 'FRIENDLY',
      ratingFrom: 0,
      ratingTo: 6.1,
      timeExpires: '2024-02-06T18:35:02.067Z',
      isApproved: true,
      createdAt: '2024-02-04T09:15:58.588Z',
      updatedAt: '2024-02-05T18:35:02.019Z',
      matchBookings: [
        {
          id: 10029,
          paid: 8000,
          matchResults: [
            [4, 6],
            [4, 6],
            [7, 5],
          ],
          confirmMatchResults: true,
          team: 'A',
          ratingAfterMatch: 0,
          ratingProfit: 0,
          createdAt: '2024-02-04T09:15:58.588Z',
          updatedAt: '2024-03-14T14:17:12.797Z',
          player: {
            id: 55,
            ratingPadel: 2.55,
            ratingTennis: 4.5,
            ratingPickleball: 1.5,
            padelTestResults: null,
            tennisTestResults: null,
            pickleballTestResults: null,
            createdAt: '2023-12-04T07:28:32.741Z',
            updatedAt: '2024-04-03T09:47:50.834Z',
            user: {
              id: 58,
              firstname: 'Treeh',
              lastname: 'Lastname',
              fullname: 'Treeh Lastname',
              email: 'kanapatskayaLiza@gmail.com',
              phone: null,
              roles: ['PLAYER', 'USER', 'ADMIN', 'CLUB_OWNER'],
              gender: 'FEMALE',
              createdAt: '2023-12-04T07:28:32.741Z',
              updatedAt: '2024-03-18T14:40:08.613Z',
              deletedAt: null,
            },
          },
        },
      ],
      totalPaid: 8000,
      paid: true,
    },
  },
  {
    id: 10030,
    paid: 5000,
    matchResults: [
      [4, 6],
      [4, 6],
      [7, 5],
    ],
    confirmMatchResults: true,
    team: 'A',
    ratingAfterMatch: 2.9,
    ratingProfit: 0,
    createdAt: '2024-02-04T09:44:02.075Z',
    updatedAt: '2024-03-14T14:17:12.797Z',
    match: {
      id: 10030,
      price: 20000,
      isPrivate: false,
      isCancelled: true,
      sport: 'PADEL',
      gender: 'ALL',
      matchResults: null,
      confirmMatchResults: true,
      winningTeam: null,
      type: 'COMPETITIVE',
      ratingFrom: 1.25,
      ratingTo: 2.25,
      timeExpires: '2024-02-08T12:00:00.000Z',
      isApproved: false,
      createdAt: '2024-02-04T09:44:02.075Z',
      updatedAt: '2024-02-08T12:00:02.013Z',
      matchBookings: [
        {
          id: 10030,
          paid: 5000,
          matchResults: [
            [4, 6],
            [4, 6],
            [7, 5],
          ],
          confirmMatchResults: true,
          team: 'A',
          ratingAfterMatch: 0,
          ratingProfit: 0,
          createdAt: '2024-02-04T09:44:02.075Z',
          updatedAt: '2024-03-14T14:17:12.797Z',
          player: {
            id: 55,
            ratingPadel: 2.55,
            ratingTennis: 4.5,
            ratingPickleball: 1.5,
            padelTestResults: null,
            tennisTestResults: null,
            pickleballTestResults: null,
            createdAt: '2023-12-04T07:28:32.741Z',
            updatedAt: '2024-04-03T09:47:50.834Z',
            user: {
              id: 58,
              firstname: 'Treeh',
              lastname: 'Lastname',
              fullname: 'Treeh Lastname',
              email: 'kanapatskayaLiza@gmail.com',
              phone: null,
              roles: ['PLAYER', 'USER', 'ADMIN', 'CLUB_OWNER'],
              gender: 'FEMALE',
              createdAt: '2023-12-04T07:28:32.741Z',
              updatedAt: '2024-03-18T14:40:08.613Z',
              deletedAt: null,
            },
          },
        },
      ],
      totalPaid: 5000,
      paid: false,
    },
  },
  {
    id: 10031,
    paid: 1500,
    matchResults: [
      [4, 6],
      [4, 6],
      [7, 5],
    ],
    confirmMatchResults: true,
    team: 'A',
    ratingAfterMatch: 3.1,
    ratingProfit: 0,
    createdAt: '2024-02-04T13:37:16.313Z',
    updatedAt: '2024-03-14T14:17:12.797Z',
    match: {
      id: 10031,
      price: 6000,
      isPrivate: false,
      isCancelled: true,
      sport: 'PADEL',
      gender: 'ALL',
      matchResults: null,
      confirmMatchResults: true,
      winningTeam: null,
      type: 'COMPETITIVE',
      ratingFrom: 1.25,
      ratingTo: 2.25,
      timeExpires: '2024-02-07T17:00:00.000Z',
      isApproved: false,
      createdAt: '2024-02-04T13:37:16.313Z',
      updatedAt: '2024-02-07T17:00:01.122Z',
      matchBookings: [
        {
          id: 10031,
          paid: 1500,
          matchResults: [
            [4, 6],
            [4, 6],
            [7, 5],
          ],
          confirmMatchResults: true,
          team: 'A',
          ratingAfterMatch: 0,
          ratingProfit: 0,
          createdAt: '2024-02-04T13:37:16.313Z',
          updatedAt: '2024-03-14T14:17:12.797Z',
          player: {
            id: 55,
            ratingPadel: 2.55,
            ratingTennis: 4.5,
            ratingPickleball: 1.5,
            padelTestResults: null,
            tennisTestResults: null,
            pickleballTestResults: null,
            createdAt: '2023-12-04T07:28:32.741Z',
            updatedAt: '2024-04-03T09:47:50.834Z',
            user: {
              id: 58,
              firstname: 'Treeh',
              lastname: 'Lastname',
              fullname: 'Treeh Lastname',
              email: 'kanapatskayaLiza@gmail.com',
              phone: null,
              roles: ['PLAYER', 'USER', 'ADMIN', 'CLUB_OWNER'],
              gender: 'FEMALE',
              createdAt: '2023-12-04T07:28:32.741Z',
              updatedAt: '2024-03-18T14:40:08.613Z',
              deletedAt: null,
            },
          },
        },
      ],
      totalPaid: 1500,
      paid: false,
    },
  },
  {
    id: 10032,
    paid: 3000,
    matchResults: [
      [4, 6],
      [4, 6],
      [7, 5],
    ],
    confirmMatchResults: true,
    team: 'A',
    ratingAfterMatch: 4.2,
    ratingProfit: 0,
    createdAt: '2024-02-04T13:38:50.508Z',
    updatedAt: '2024-03-14T14:17:12.797Z',
    match: {
      id: 10032,
      price: 12000,
      isPrivate: false,
      isCancelled: true,
      sport: 'PADEL',
      gender: 'ALL',
      matchResults: null,
      confirmMatchResults: true,
      winningTeam: null,
      type: 'COMPETITIVE',
      ratingFrom: 1.25,
      ratingTo: 2.25,
      timeExpires: '2024-02-09T17:00:00.000Z',
      isApproved: false,
      createdAt: '2024-02-04T13:38:50.508Z',
      updatedAt: '2024-02-09T17:00:09.176Z',
      matchBookings: [
        {
          id: 10039,
          paid: 3000,
          matchResults: [
            [6, 4],
            [6, 4],
            [0, 6],
          ],
          confirmMatchResults: true,
          team: 'B',
          ratingAfterMatch: 0,
          ratingProfit: 0,
          createdAt: '2024-02-04T19:11:46.280Z',
          updatedAt: '2024-03-15T08:08:47.967Z',
          player: {
            id: 66,
            ratingPadel: 1,
            ratingTennis: 3,
            ratingPickleball: 0,
            padelTestResults: null,
            tennisTestResults: null,
            pickleballTestResults: null,
            createdAt: '2023-12-24T07:40:07.873Z',
            updatedAt: '2024-03-18T09:03:27.685Z',
            user: {
              id: 69,
              firstname: 'Elia',
              lastname: 'Degazie',
              fullname: 'Elia Degazie',
              email: 'saimonvs@mail.ru',
              phone: null,
              roles: ['PLAYER', 'USER'],
              gender: null,
              createdAt: '2023-12-24T07:40:07.873Z',
              updatedAt: '2024-03-27T07:26:23.259Z',
              deletedAt: null,
            },
          },
        },
        {
          id: 10032,
          paid: 3000,
          matchResults: [
            [4, 6],
            [4, 6],
            [7, 5],
          ],
          confirmMatchResults: true,
          team: 'A',
          ratingAfterMatch: 0,
          ratingProfit: 0,
          createdAt: '2024-02-04T13:38:50.508Z',
          updatedAt: '2024-03-14T14:17:12.797Z',
          player: {
            id: 55,
            ratingPadel: 2.55,
            ratingTennis: 4.5,
            ratingPickleball: 1.5,
            padelTestResults: null,
            tennisTestResults: null,
            pickleballTestResults: null,
            createdAt: '2023-12-04T07:28:32.741Z',
            updatedAt: '2024-04-03T09:47:50.834Z',
            user: {
              id: 58,
              firstname: 'Treeh',
              lastname: 'Lastname',
              fullname: 'Treeh Lastname',
              email: 'kanapatskayaLiza@gmail.com',
              phone: null,
              roles: ['PLAYER', 'USER', 'ADMIN', 'CLUB_OWNER'],
              gender: 'FEMALE',
              createdAt: '2023-12-04T07:28:32.741Z',
              updatedAt: '2024-03-18T14:40:08.613Z',
              deletedAt: null,
            },
          },
        },
      ],
      totalPaid: 6000,
      paid: false,
    },
  },
];

interface IRatingChartProps {
  matchesLimit: number;
  // setCurrentMatch: (match: MatchData) => void;
  setCurrentMatch: any;
}

export const RatingChart: React.FC<IRatingChartProps> = ({
  matchesLimit,
  setCurrentMatch,
}) => {
  const { data } = useQuery({
    queryKey: ['match-bookings', matchesLimit],
    queryFn: () => getMatchBookings(matchesLimit),
  });

  const bookingsList = data?.data;

  return (
    <Box width="100%" height={300}>
      <ResponsiveContainer>
        <AreaChart
          data={fakeData}
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
            dataKey="ratingAfterMatch"
            stroke="#768EF7"
            dot={true}
            fillOpacity={1}
            fill="url(#colorUv)"
            activeDot={{
              onClick: (_, data: any) => setCurrentMatch(data?.payload?.match),
            }}
          >
            <LabelList dataKey="ratingAfterMatch" position="insideTop" />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
