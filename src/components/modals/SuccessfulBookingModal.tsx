import React from 'react';
import { ModalContainer } from './ModalContainer';
import { Link, Stack, Typography } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';
import { getOneAvailableMatch } from '../../services/matches/service';
import { useQuery } from '@tanstack/react-query';
import { getClass } from '../../services/classes';
interface ISuccessfulBookingModal {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  token: string;
  isClass: boolean;
}
export const SuccessfulBookingModal: React.FC<ISuccessfulBookingModal> = ({
  openState,
  handleModal,
  token,
  isClass,
}) => {
  const id = token?.slice(3, token?.length);

  const { data: matchData } = useQuery({
    queryKey: ['matches', id],
    queryFn: () => getOneAvailableMatch(id),
    enabled: !!token && openState && !isClass,
  });

  const matchId = matchData?.data?.id;

  const { data: classData } = useQuery({
    queryKey: ['classes', id],
    queryFn: () => getClass(id),
    enabled: !!token && openState && isClass,
  });

  const classId = classData?.data?.id;

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle=""
    >
      <Stack spacing={4} alignItems="center">
        <Typography variant="h5" fontWeight={600}>
          Корт забронирован!
        </Typography>
        <svg x="0px" y="0px" width={100} height={100} viewBox="0 0 50 50">
          <path
            fill="#5fac5f"
            d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"
          />
        </svg>
        <Link
          component={ReactRouterLink}
          to={isClass ? `/classes/${classId}` : `/matches/${matchId}`}
          underline="none"
          bgcolor="primary.main"
          color="#fff !important"
          py={1.5}
          fontSize={18}
          sx={{ '&:hover': { opacity: 0.95 } }}
          width="100%"
          textAlign="center"
        >
          Перейти
        </Link>
      </Stack>
    </ModalContainer>
  );
};
