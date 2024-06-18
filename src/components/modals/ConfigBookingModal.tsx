import { useUserInfo } from '../../services/api/hooks';
import { ModalContainer } from './ModalContainer';
import { Role } from '../../services/user/interface';
import { Box, Typography, Switch, Button, Link } from '@mui/material';
import { ClassCreationForm } from '../organisms/ClassCreationForm';
import { MatchCreationForm } from '../organisms/MatchCreationForm';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useFormContext } from 'react-hook-form';
import { getSportRating } from '../../helpers/getSportRating';
import { useEffect } from 'react';
import { isAuthorized } from '../../services/auth/service';
import { useQuery } from '@tanstack/react-query';
import { getUnpaidMatchesList } from '../../services/payments';
import { Link as ReactRouterLink } from 'react-router-dom';

interface IConfigBookingModal {
  sport: string;
  openState: boolean;
  handleModal: (val?: boolean) => void;
  handleNext: () => void;
}

export const ConfigBookingModal: React.FC<IConfigBookingModal> = ({
  sport,
  openState,
  handleModal,
  handleNext,
}) => {
  const isAuth = isAuthorized();

  const { data } = useQuery({
    queryKey: ['unpaid'],
    queryFn: getUnpaidMatchesList,
    enabled: isAuth,
  });
  const debtsAmount = data?.data?.length;

  const { watch, setValue, reset } = useFormContext();
  const { isClass, title, description } = watch();

  const [user] = useUserInfo();
  const isTrainer = user?.roles?.find((role) => role === Role.TRAINER);

  const rating = user?.player ? getSportRating(user.player, sport) : 0;

  useEffect(() => {
    if (rating && !isClass) {
      const ratingFrom = rating < 0.25 ? 0 : +(rating - 0.25).toFixed(2);
      const ratingTo = rating > 6.25 ? 7 : +(rating + 0.75).toFixed(2);
      setValue('ratingFrom', ratingFrom);
      setValue('ratingTo', ratingTo);
    }
  }, [rating, isClass]);

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Настройте свой матч"
    >
      <Box>
        {!!debtsAmount && (
          <Typography
            color="error"
            fontSize={16}
            fontWeight={600}
            textAlign="center"
            mb={2}
          >
            Пока у Вас есть{' '}
            <Link
              component={ReactRouterLink}
              to="/profile/payments"
              color="error"
            >
              задолженности
            </Link>{' '}
            по оплатам, забронировать корт невозможно!
          </Typography>
        )}
        {isTrainer && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" gap={1} alignItems="center">
              <SchoolOutlinedIcon />
              <Typography>Бронировать для занятия</Typography>
            </Box>
            <Switch
              value={isClass}
              onChange={(_, checked) => {
                reset();
                setValue('isClass', checked);
              }}
            />
          </Box>
        )}

        {isClass ? (
          <ClassCreationForm />
        ) : (
          <MatchCreationForm rating={rating} />
        )}
        {isAuth ? (
          <Button
            disabled={
              !!debtsAmount ||
              (isClass &&
                (title.length < 5 ||
                  !watch('priceForSpot') ||
                  description.length < 5))
            }
            onClick={() => {
              handleModal();
              handleNext();
            }}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#333',
              marginTop: 4,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Перейти к оплате
          </Button>
        ) : (
          <Typography mt={4} textAlign="center">
            <Link
              to="/auth"
              component={ReactRouterLink}
              fontWeight={600}
              sx={{ color: 'blue !important' }}
            >
              Авторизируйтесь
            </Link>
            , что бы забронировать корт
          </Typography>
        )}
      </Box>
    </ModalContainer>
  );
};
