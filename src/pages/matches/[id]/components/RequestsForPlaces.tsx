import React from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useQuery } from '@tanstack/react-query';
import { getOneAvailableMatch } from '../../../../services/matches/service';
import { useParams } from 'react-router';
import { withHostname } from '../../../../services/api/service';
import { isPlatform } from '@ionic/react';
import { RequestsForPlacesModal } from '../../../../components/modals/RequestsForPlacesModal';
import useToggle from '../../../../hooks/useToggle';
const joinrequests = [
  {
    id: 1,
    team: 'A',
    createdAt: '2024-04-07T17:14:07.664Z',
    updatedAt: '2024-04-07T17:14:07.664Z',
    joinapprovals: [
      {
        id: 13,
        approved: true,
        createdAt: '2024-04-07T18:42:59.203Z',
        updatedAt: '2024-04-07T18:42:59.203Z',
        approver: {
          id: 10207,
          paid: 1,
          matchResults: null,
          confirmMatchResults: false,
          team: 'A',
          ratingAfterMatch: 0,
          ratingProfit: 0,
          createdAt: '2024-04-07T17:10:42.137Z',
          updatedAt: '2024-04-07T17:10:42.137Z',
          player: {
            id: 55,
            ratingPadel: 2.3,
            ratingTennis: 4.5,
            ratingPickleball: 1.5,
            padelTestResults: null,
            tennisTestResults: null,
            pickleballTestResults: null,
            createdAt: '2023-12-04T07:28:32.741Z',
            updatedAt: '2024-04-05T16:36:08.490Z',
            user: {
              id: 58,
              firstname: 'Treeh',
              lastname: 'Lastname',
              fullname: 'Treeh Lastname',
              email: 'kanapatskayaLiza@gmail.com',
              phone: '+7 (456) 372-89-29',
              roles: ['PLAYER', 'USER', 'ADMIN', 'CLUB_OWNER'],
              gender: 'FEMALE',
              createdAt: '2023-12-04T07:28:32.741Z',
              updatedAt: '2024-04-06T10:19:25.933Z',
              deletedAt: null,
              avatar: {
                id: 202,
                formats: {
                  png: '/api/public/uploads/9ab9fe49-8db8-4e27-ae58-5eee5621c5dd.png',
                  small:
                    '/api/public/uploads/e61e2e88-6437-4b9d-8dd9-d31e9459cf42.jpg',
                  medium:
                    '/api/public/uploads/72e61498-b525-43f5-af54-0a15820304dc.jpg',
                },
                createdAt: '2024-04-06T10:19:27.160Z',
                updatedAt: '2024-04-06T10:19:27.160Z',
                deletedAt: null,
              },
            },
          },
        },
      },
    ],
    player: {
      id: 49,
      ratingPadel: 0.44,
      ratingTennis: 1.26,
      ratingPickleball: 0.88,
      padelTestResults: null,
      tennisTestResults: null,
      pickleballTestResults: null,
      createdAt: '2023-11-20T09:22:53.209Z',
      updatedAt: '2024-04-02T12:02:37.610Z',
      user: {
        id: 52,
        firstname: 'Amir',
        lastname: 'Musaev',
        fullname: 'Amir Musaev',
        email: 'musaevonline@gmail.com',
        phone: null,
        roles: ['PLAYER', 'USER', 'ADMIN'],
        gender: 'MALE',
        createdAt: '2023-11-20T09:22:53.209Z',
        updatedAt: '2024-03-15T06:39:12.806Z',
        deletedAt: null,
        avatar: {
          id: 189,
          formats: {
            png: '/api/public/uploads/85b52439-b6ae-4bad-a57c-c3dfe3b225c3.png',
            small:
              '/api/public/uploads/bfaa9cda-74c7-4757-8dd0-85f1c4657cab.jpg',
            medium:
              '/api/public/uploads/915ae289-1d97-4816-87d7-416ef226485a.jpg',
          },
          createdAt: '2024-03-15T06:39:01.145Z',
          updatedAt: '2024-03-15T06:39:01.145Z',
          deletedAt: null,
        },
      },
    },
  },
  {
    id: 2,
    team: 'B',
    createdAt: '2024-04-08T13:12:48.898Z',
    updatedAt: '2024-04-08T13:12:48.898Z',
    joinapprovals: [],
    player: {
      id: 10015,
      ratingPadel: 1,
      ratingTennis: 5.2,
      ratingPickleball: 0,
      padelTestResults: {
        age: '0',
        level: 1,
        gender: 'FEMALE',
        fitness: '0',
        lessons: '1',
        experience: '2',
        countMatches: '2',
      },
      tennisTestResults: {
        age: '0',
        level: 4,
        gender: 'MALE',
        fitness: '0',
        lessons: '2',
        experience: '3',
        countMatches: '3',
      },
      pickleballTestResults: null,
      createdAt: '2024-04-03T14:58:30.514Z',
      updatedAt: '2024-04-05T16:52:33.121Z',
      user: {
        id: 10015,
        firstname: 'Test',
        lastname: 'Test 2',
        fullname: 'Test Test 2',
        email: 'kanapatskayaLizA@gmail.com',
        phone: '+7 (423) 249-49-22',
        roles: ['PLAYER', 'USER'],
        gender: null,
        createdAt: '2024-04-03T14:58:30.514Z',
        updatedAt: '2024-04-03T15:38:22.662Z',
        deletedAt: null,
        avatar: {
          id: 200,
          formats: {
            png: '/api/public/uploads/3de1ca43-3515-4e25-abe1-1c340b5fb162.png',
            small:
              '/api/public/uploads/9a66fd33-e6cc-41ef-980d-1005613290db.jpg',
            medium:
              '/api/public/uploads/778c13c6-6de0-4a36-afef-7b755f9b2c88.jpg',
          },
          createdAt: '2024-04-03T15:38:25.160Z',
          updatedAt: '2024-04-03T15:38:25.160Z',
          deletedAt: null,
        },
      },
    },
  },
  {
    id: 1,
    team: 'A',
    createdAt: '2024-04-07T17:14:07.664Z',
    updatedAt: '2024-04-07T17:14:07.664Z',
    joinapprovals: [
      {
        id: 13,
        approved: true,
        createdAt: '2024-04-07T18:42:59.203Z',
        updatedAt: '2024-04-07T18:42:59.203Z',
        approver: {
          id: 10207,
          paid: 1,
          matchResults: null,
          confirmMatchResults: false,
          team: 'A',
          ratingAfterMatch: 0,
          ratingProfit: 0,
          createdAt: '2024-04-07T17:10:42.137Z',
          updatedAt: '2024-04-07T17:10:42.137Z',
          player: {
            id: 55,
            ratingPadel: 2.3,
            ratingTennis: 4.5,
            ratingPickleball: 1.5,
            padelTestResults: null,
            tennisTestResults: null,
            pickleballTestResults: null,
            createdAt: '2023-12-04T07:28:32.741Z',
            updatedAt: '2024-04-05T16:36:08.490Z',
            user: {
              id: 58,
              firstname: 'Treeh',
              lastname: 'Lastname',
              fullname: 'Treeh Lastname',
              email: 'kanapatskayaLiza@gmail.com',
              phone: '+7 (456) 372-89-29',
              roles: ['PLAYER', 'USER', 'ADMIN', 'CLUB_OWNER'],
              gender: 'FEMALE',
              createdAt: '2023-12-04T07:28:32.741Z',
              updatedAt: '2024-04-06T10:19:25.933Z',
              deletedAt: null,
              avatar: {
                id: 202,
                formats: {
                  png: '/api/public/uploads/9ab9fe49-8db8-4e27-ae58-5eee5621c5dd.png',
                  small:
                    '/api/public/uploads/e61e2e88-6437-4b9d-8dd9-d31e9459cf42.jpg',
                  medium:
                    '/api/public/uploads/72e61498-b525-43f5-af54-0a15820304dc.jpg',
                },
                createdAt: '2024-04-06T10:19:27.160Z',
                updatedAt: '2024-04-06T10:19:27.160Z',
                deletedAt: null,
              },
            },
          },
        },
      },
    ],
    player: {
      id: 49,
      ratingPadel: 0.44,
      ratingTennis: 1.26,
      ratingPickleball: 0.88,
      padelTestResults: null,
      tennisTestResults: null,
      pickleballTestResults: null,
      createdAt: '2023-11-20T09:22:53.209Z',
      updatedAt: '2024-04-02T12:02:37.610Z',
      user: {
        id: 52,
        firstname: 'Amir',
        lastname: 'Musaev',
        fullname: 'Amir Musaev',
        email: 'musaevonline@gmail.com',
        phone: null,
        roles: ['PLAYER', 'USER', 'ADMIN'],
        gender: 'MALE',
        createdAt: '2023-11-20T09:22:53.209Z',
        updatedAt: '2024-03-15T06:39:12.806Z',
        deletedAt: null,
        avatar: {
          id: 189,
          formats: {
            png: '/api/public/uploads/85b52439-b6ae-4bad-a57c-c3dfe3b225c3.png',
            small:
              '/api/public/uploads/bfaa9cda-74c7-4757-8dd0-85f1c4657cab.jpg',
            medium:
              '/api/public/uploads/915ae289-1d97-4816-87d7-416ef226485a.jpg',
          },
          createdAt: '2024-03-15T06:39:01.145Z',
          updatedAt: '2024-03-15T06:39:01.145Z',
          deletedAt: null,
        },
      },
    },
  },
  {
    id: 2,
    team: 'B',
    createdAt: '2024-04-08T13:12:48.898Z',
    updatedAt: '2024-04-08T13:12:48.898Z',
    joinapprovals: [],
    player: {
      id: 10015,
      ratingPadel: 1,
      ratingTennis: 5.2,
      ratingPickleball: 0,
      padelTestResults: {
        age: '0',
        level: 1,
        gender: 'FEMALE',
        fitness: '0',
        lessons: '1',
        experience: '2',
        countMatches: '2',
      },
      tennisTestResults: {
        age: '0',
        level: 4,
        gender: 'MALE',
        fitness: '0',
        lessons: '2',
        experience: '3',
        countMatches: '3',
      },
      pickleballTestResults: null,
      createdAt: '2024-04-03T14:58:30.514Z',
      updatedAt: '2024-04-05T16:52:33.121Z',
      user: {
        id: 10015,
        firstname: 'Test',
        lastname: 'Test 2',
        fullname: 'Test Test 2',
        email: 'kanapatskayaLizA@gmail.com',
        phone: '+7 (423) 249-49-22',
        roles: ['PLAYER', 'USER'],
        gender: null,
        createdAt: '2024-04-03T14:58:30.514Z',
        updatedAt: '2024-04-03T15:38:22.662Z',
        deletedAt: null,
        avatar: {
          id: 200,
          formats: {
            png: '/api/public/uploads/3de1ca43-3515-4e25-abe1-1c340b5fb162.png',
            small:
              '/api/public/uploads/9a66fd33-e6cc-41ef-980d-1005613290db.jpg',
            medium:
              '/api/public/uploads/778c13c6-6de0-4a36-afef-7b755f9b2c88.jpg',
          },
          createdAt: '2024-04-03T15:38:25.160Z',
          updatedAt: '2024-04-03T15:38:25.160Z',
          deletedAt: null,
        },
      },
    },
  },
  {
    id: 1,
    team: 'A',
    createdAt: '2024-04-07T17:14:07.664Z',
    updatedAt: '2024-04-07T17:14:07.664Z',
    joinapprovals: [
      {
        id: 13,
        approved: true,
        createdAt: '2024-04-07T18:42:59.203Z',
        updatedAt: '2024-04-07T18:42:59.203Z',
        approver: {
          id: 10207,
          paid: 1,
          matchResults: null,
          confirmMatchResults: false,
          team: 'A',
          ratingAfterMatch: 0,
          ratingProfit: 0,
          createdAt: '2024-04-07T17:10:42.137Z',
          updatedAt: '2024-04-07T17:10:42.137Z',
          player: {
            id: 55,
            ratingPadel: 2.3,
            ratingTennis: 4.5,
            ratingPickleball: 1.5,
            padelTestResults: null,
            tennisTestResults: null,
            pickleballTestResults: null,
            createdAt: '2023-12-04T07:28:32.741Z',
            updatedAt: '2024-04-05T16:36:08.490Z',
            user: {
              id: 58,
              firstname: 'Treeh',
              lastname: 'Lastname',
              fullname: 'Treeh Lastname',
              email: 'kanapatskayaLiza@gmail.com',
              phone: '+7 (456) 372-89-29',
              roles: ['PLAYER', 'USER', 'ADMIN', 'CLUB_OWNER'],
              gender: 'FEMALE',
              createdAt: '2023-12-04T07:28:32.741Z',
              updatedAt: '2024-04-06T10:19:25.933Z',
              deletedAt: null,
              avatar: {
                id: 202,
                formats: {
                  png: '/api/public/uploads/9ab9fe49-8db8-4e27-ae58-5eee5621c5dd.png',
                  small:
                    '/api/public/uploads/e61e2e88-6437-4b9d-8dd9-d31e9459cf42.jpg',
                  medium:
                    '/api/public/uploads/72e61498-b525-43f5-af54-0a15820304dc.jpg',
                },
                createdAt: '2024-04-06T10:19:27.160Z',
                updatedAt: '2024-04-06T10:19:27.160Z',
                deletedAt: null,
              },
            },
          },
        },
      },
    ],
    player: {
      id: 49,
      ratingPadel: 0.44,
      ratingTennis: 1.26,
      ratingPickleball: 0.88,
      padelTestResults: null,
      tennisTestResults: null,
      pickleballTestResults: null,
      createdAt: '2023-11-20T09:22:53.209Z',
      updatedAt: '2024-04-02T12:02:37.610Z',
      user: {
        id: 52,
        firstname: 'Amir',
        lastname: 'Musaev',
        fullname: 'Amir Musaev',
        email: 'musaevonline@gmail.com',
        phone: null,
        roles: ['PLAYER', 'USER', 'ADMIN'],
        gender: 'MALE',
        createdAt: '2023-11-20T09:22:53.209Z',
        updatedAt: '2024-03-15T06:39:12.806Z',
        deletedAt: null,
        avatar: {
          id: 189,
          formats: {
            png: '/api/public/uploads/85b52439-b6ae-4bad-a57c-c3dfe3b225c3.png',
            small:
              '/api/public/uploads/bfaa9cda-74c7-4757-8dd0-85f1c4657cab.jpg',
            medium:
              '/api/public/uploads/915ae289-1d97-4816-87d7-416ef226485a.jpg',
          },
          createdAt: '2024-03-15T06:39:01.145Z',
          updatedAt: '2024-03-15T06:39:01.145Z',
          deletedAt: null,
        },
      },
    },
  },
  {
    id: 2,
    team: 'B',
    createdAt: '2024-04-08T13:12:48.898Z',
    updatedAt: '2024-04-08T13:12:48.898Z',
    joinapprovals: [],
    player: {
      id: 10015,
      ratingPadel: 1,
      ratingTennis: 5.2,
      ratingPickleball: 0,
      padelTestResults: {
        age: '0',
        level: 1,
        gender: 'FEMALE',
        fitness: '0',
        lessons: '1',
        experience: '2',
        countMatches: '2',
      },
      tennisTestResults: {
        age: '0',
        level: 4,
        gender: 'MALE',
        fitness: '0',
        lessons: '2',
        experience: '3',
        countMatches: '3',
      },
      pickleballTestResults: null,
      createdAt: '2024-04-03T14:58:30.514Z',
      updatedAt: '2024-04-05T16:52:33.121Z',
      user: {
        id: 10015,
        firstname: 'Test',
        lastname: 'Test 2',
        fullname: 'Test Test 2',
        email: 'kanapatskayaLizA@gmail.com',
        phone: '+7 (423) 249-49-22',
        roles: ['PLAYER', 'USER'],
        gender: null,
        createdAt: '2024-04-03T14:58:30.514Z',
        updatedAt: '2024-04-03T15:38:22.662Z',
        deletedAt: null,
        avatar: {
          id: 200,
          formats: {
            png: '/api/public/uploads/3de1ca43-3515-4e25-abe1-1c340b5fb162.png',
            small:
              '/api/public/uploads/9a66fd33-e6cc-41ef-980d-1005613290db.jpg',
            medium:
              '/api/public/uploads/778c13c6-6de0-4a36-afef-7b755f9b2c88.jpg',
          },
          createdAt: '2024-04-03T15:38:25.160Z',
          updatedAt: '2024-04-03T15:38:25.160Z',
          deletedAt: null,
        },
      },
    },
  },
  {
    id: 1,
    team: 'A',
    createdAt: '2024-04-07T17:14:07.664Z',
    updatedAt: '2024-04-07T17:14:07.664Z',
    joinapprovals: [
      {
        id: 13,
        approved: true,
        createdAt: '2024-04-07T18:42:59.203Z',
        updatedAt: '2024-04-07T18:42:59.203Z',
        approver: {
          id: 10207,
          paid: 1,
          matchResults: null,
          confirmMatchResults: false,
          team: 'A',
          ratingAfterMatch: 0,
          ratingProfit: 0,
          createdAt: '2024-04-07T17:10:42.137Z',
          updatedAt: '2024-04-07T17:10:42.137Z',
          player: {
            id: 55,
            ratingPadel: 2.3,
            ratingTennis: 4.5,
            ratingPickleball: 1.5,
            padelTestResults: null,
            tennisTestResults: null,
            pickleballTestResults: null,
            createdAt: '2023-12-04T07:28:32.741Z',
            updatedAt: '2024-04-05T16:36:08.490Z',
            user: {
              id: 58,
              firstname: 'Treeh',
              lastname: 'Lastname',
              fullname: 'Treeh Lastname',
              email: 'kanapatskayaLiza@gmail.com',
              phone: '+7 (456) 372-89-29',
              roles: ['PLAYER', 'USER', 'ADMIN', 'CLUB_OWNER'],
              gender: 'FEMALE',
              createdAt: '2023-12-04T07:28:32.741Z',
              updatedAt: '2024-04-06T10:19:25.933Z',
              deletedAt: null,
              avatar: {
                id: 202,
                formats: {
                  png: '/api/public/uploads/9ab9fe49-8db8-4e27-ae58-5eee5621c5dd.png',
                  small:
                    '/api/public/uploads/e61e2e88-6437-4b9d-8dd9-d31e9459cf42.jpg',
                  medium:
                    '/api/public/uploads/72e61498-b525-43f5-af54-0a15820304dc.jpg',
                },
                createdAt: '2024-04-06T10:19:27.160Z',
                updatedAt: '2024-04-06T10:19:27.160Z',
                deletedAt: null,
              },
            },
          },
        },
      },
    ],
    player: {
      id: 49,
      ratingPadel: 0.44,
      ratingTennis: 1.26,
      ratingPickleball: 0.88,
      padelTestResults: null,
      tennisTestResults: null,
      pickleballTestResults: null,
      createdAt: '2023-11-20T09:22:53.209Z',
      updatedAt: '2024-04-02T12:02:37.610Z',
      user: {
        id: 52,
        firstname: 'Amir',
        lastname: 'Musaev',
        fullname: 'Amir Musaev',
        email: 'musaevonline@gmail.com',
        phone: null,
        roles: ['PLAYER', 'USER', 'ADMIN'],
        gender: 'MALE',
        createdAt: '2023-11-20T09:22:53.209Z',
        updatedAt: '2024-03-15T06:39:12.806Z',
        deletedAt: null,
        avatar: {
          id: 189,
          formats: {
            png: '/api/public/uploads/85b52439-b6ae-4bad-a57c-c3dfe3b225c3.png',
            small:
              '/api/public/uploads/bfaa9cda-74c7-4757-8dd0-85f1c4657cab.jpg',
            medium:
              '/api/public/uploads/915ae289-1d97-4816-87d7-416ef226485a.jpg',
          },
          createdAt: '2024-03-15T06:39:01.145Z',
          updatedAt: '2024-03-15T06:39:01.145Z',
          deletedAt: null,
        },
      },
    },
  },
  {
    id: 2,
    team: 'B',
    createdAt: '2024-04-08T13:12:48.898Z',
    updatedAt: '2024-04-08T13:12:48.898Z',
    joinapprovals: [],
    player: {
      id: 10015,
      ratingPadel: 1,
      ratingTennis: 5.2,
      ratingPickleball: 0,
      padelTestResults: {
        age: '0',
        level: 1,
        gender: 'FEMALE',
        fitness: '0',
        lessons: '1',
        experience: '2',
        countMatches: '2',
      },
      tennisTestResults: {
        age: '0',
        level: 4,
        gender: 'MALE',
        fitness: '0',
        lessons: '2',
        experience: '3',
        countMatches: '3',
      },
      pickleballTestResults: null,
      createdAt: '2024-04-03T14:58:30.514Z',
      updatedAt: '2024-04-05T16:52:33.121Z',
      user: {
        id: 10015,
        firstname: 'Test',
        lastname: 'Test 2',
        fullname: 'Test Test 2',
        email: 'kanapatskayaLizA@gmail.com',
        phone: '+7 (423) 249-49-22',
        roles: ['PLAYER', 'USER'],
        gender: null,
        createdAt: '2024-04-03T14:58:30.514Z',
        updatedAt: '2024-04-03T15:38:22.662Z',
        deletedAt: null,
        avatar: {
          id: 200,
          formats: {
            png: '/api/public/uploads/3de1ca43-3515-4e25-abe1-1c340b5fb162.png',
            small:
              '/api/public/uploads/9a66fd33-e6cc-41ef-980d-1005613290db.jpg',
            medium:
              '/api/public/uploads/778c13c6-6de0-4a36-afef-7b755f9b2c88.jpg',
          },
          createdAt: '2024-04-03T15:38:25.160Z',
          updatedAt: '2024-04-03T15:38:25.160Z',
          deletedAt: null,
        },
      },
    },
  },
];

const isDesktop = isPlatform('desktop');

export const RequestsForPlaces = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: [`match`, +matchId],
    queryFn: () => getOneAvailableMatch(+matchId),
  });

  const [openRequestsModal, setOpenRequestsModal] = useToggle();

  //   const joinrequests = data?.data?.joinrequests;

  //   if (!joinrequests || isError) return;

  return (
    <>
      <Button
        onClick={() => setOpenRequestsModal()}
        sx={{
          border: '1px solid #ddd',
          mb: 2,
          p: 1,
          justifyContent: isDesktop ? 'start' : 'center',
        }}
      >
        <Box display="flex" mr={2}>
          {joinrequests
            .slice(0, joinrequests.length >= 3 ? 2 : 1)
            .map((player, i) => {
              return (
                <Avatar
                  key={player.id}
                  src={withHostname(
                    player?.player?.user?.avatar?.formats?.small || '',
                  )}
                  sx={{ ml: i > 0 ? -2 : 0, border: '2px solid #ddd' }}
                />
              );
            })}
          {joinrequests.length > 3 && (
            <Box
              bgcolor="#fff"
              zIndex={1}
              ml={-2}
              width={40}
              height={40}
              border="2px solid #eee"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography color="primary.main">
                +{joinrequests.length - 2}
              </Typography>
            </Box>
          )}
        </Box>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          gap={2}
          justifyContent={isDesktop ? 'space-between' : 'unset'}
        >
          <Box>
            <Typography
              textAlign="start"
              fontWeight={600}
              lineHeight={1.2}
              mb={0.5}
            >
              Запросы на присоединение
            </Typography>
            <Typography
              textAlign="start"
              color="gray"
              fontSize={13}
              lineHeight={1.2}
            >
              Посмотреть статус запросов от игроков на присоединение
            </Typography>
          </Box>
          <ArrowForwardIosIcon fontSize="small" />
        </Box>
      </Button>
      <RequestsForPlacesModal
        openState={openRequestsModal}
        handleModal={setOpenRequestsModal}
      />
    </>
  );
};
