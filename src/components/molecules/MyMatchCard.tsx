import { Add, Error } from '@mui/icons-material';
import { Avatar, Box, ButtonBase, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UploadResultModal } from '../modals/UploadResultModal';
import { AvailableMatch } from '../../services/matches/interface';
import { useUserProfile } from '../../services/api/hooks';
import { Player } from '../../services/user/interface';

interface IMyMatchCardProps {
  noResult: boolean;
}

type ICardProps = IMyMatchCardProps & AvailableMatch;

export function MyMatchCard(props: ICardProps) {
  const { noResult, id } = props;
  const history = useHistory();

  const [openModal, setOpenModal] = useState<boolean>(false);

  function handleOpenModal() {
    setOpenModal((prev) => !prev);
  }

  const myPlayer = useUserProfile();

  const [players, setPlayers] = useState<Player[]>([]);

  const playerAlreadyInSomeTeam = !!props?.matchBookings.find(
    (booking) => booking.player?.id === myPlayer?.id,
  );

  const [playerInTeam, setPlayerInTeam] = useState<string>(
    playerAlreadyInSomeTeam ? ' ' : 'B',
  );

  useEffect(() => {
    const teamAPlayers =
      props?.matchBookings
        ?.filter((booking) => booking.team === 'A')
        ?.map((booking) => booking.player) || [];

    const teamBPlayers =
      props?.matchBookings
        ?.filter((booking) => booking.team === 'B')
        ?.map((booking) => booking.player) || [];

    if (playerInTeam === 'A' && myPlayer)
      teamAPlayers.push({ ...myPlayer, mark: !playerAlreadyInSomeTeam });
    if (playerInTeam === 'B' && myPlayer)
      teamBPlayers.push({ ...myPlayer, mark: !playerAlreadyInSomeTeam });
    teamAPlayers.length = 2;
    teamBPlayers.length = 2;

    setPlayers([...Array.from(teamAPlayers), ...Array.from(teamBPlayers)]);
  }, [props, playerInTeam, myPlayer]);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          zIndex: '99',
          padding: '10px 15px',
          width: '100%',
          maxWidth: '370px',
          background: '#fff',
          border: '1px solid #E5E5E5',
          borderRadius: '10px',

          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
        }}
      >
        {noResult && (
          <Box
            sx={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '16px',
              height: '16px',
              background: '#FF4976',
              borderRadius: '50%',
            }}
          />
        )}

        <Box
          onClick={() => {
            history.push(`/matches/${id}`);
          }}
          sx={{
            position: 'relative',
            zIndex: '9',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: !noResult ? 'space-between' : 'unset',
          }}
        >
          <Box
            sx={{
              marginBlock: '.5rem',
              borderRight: noResult ? '1px solid grey' : 'unset',
              paddingRight: noResult ? '.75rem' : 'unset',
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 'fit-content',
            }}
          >
            <Box sx={{ display: 'flex', gap: '.75rem' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: '55px', height: '55px' }} />
                <Typography sx={{ opacity: '.5' }}>1.4</Typography>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: '55px', height: '55px' }} />
                <Typography sx={{ opacity: '.5' }}>1.4</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: '35px',
                height: '1px',
                background: '#e5e5e5',
                margin: '.75rem auto',
              }}
            />
            <Box sx={{ display: 'flex', gap: '.75rem' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: '55px', height: '55px' }} />
                <Typography sx={{ opacity: '.5' }}>1.4</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: '55px', height: '55px' }} />
                <Typography sx={{ opacity: '.5' }}>1.4</Typography>
              </Box>
            </Box>
          </Box>

          {!noResult && (
            <Box
              sx={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                opacity: '.5',
              }}
            >
              <Typography sx={{ fontSize: '.75rem' }}>
                Nov 20 | 11:30 - 13:00
              </Typography>
            </Box>
          )}

          {noResult && (
            <>
              <ButtonBase
                onClick={() => handleOpenModal()}
                sx={{
                  position: 'absolute',
                  zIndex: '9999999',
                  bottom: '1rem',
                  left: '65%',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  background: '#000',
                  borderRadius: '50%',
                }}
              >
                <Add sx={{ color: '#fff' }} />
              </ButtonBase>
              <Box
                sx={{
                  width: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    paddingLeft: '15px',

                    fontSize: '.9rem',
                    fontWeight: '700',
                    flexGrow: '1',
                    width: '100%',
                  }}
                >
                  {props.gameDate} | {props.slot.time.slice(0, -3)}
                </Typography>
                <Box
                  sx={{
                    width: 'calc(100% + 15px)',
                    margin: '.5rem 0 1.25rem 15px',
                    flexGrow: '1',
                    paddingBlock: '7px',
                    background: '#FEF4F5',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '.5rem',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Error sx={{ color: '#FF3356' }} />
                    <Typography
                      sx={{
                        fontWeight: '700',
                        fontSize: '.75rem',
                        color: '#FF3356',
                      }}
                    >
                      Нет результата
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </>
          )}

          {!noResult && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '.75rem',
              }}
            >
              <Box sx={{ display: 'flex', gap: '1.75rem', opacity: '.5' }}>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                  {props.matchResults[0][0]}
                </Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                  {props.matchResults[1][0]}
                </Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                  {props.matchResults[2][0]}
                </Typography>
              </Box>

              <Box
                sx={{ width: '150%', height: '1px', background: '#e5e5e5' }}
              />

              <Box sx={{ display: 'flex', gap: '1.75rem', opacity: '.5' }}>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                  {props.matchResults[0][1]}
                </Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                  {props.matchResults[1][1]}
                </Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                  {props.matchResults[2][1]}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <UploadResultModal
        matchId={id}
        openState={openModal}
        handleModal={handleOpenModal}
      />
    </>
  );
}
