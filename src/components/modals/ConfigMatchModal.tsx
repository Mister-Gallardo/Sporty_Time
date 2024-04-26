import { useUserInfo } from '../../services/api/hooks';
import { ModalContainer } from './ModalContainer';
import { Role } from '../../services/user/interface';
import { Box, Typography, Switch, Button } from '@mui/material';
import { ClassCreationForm } from '../organisms/ClassCreationForm';
import { MatchCreationForm } from '../organisms/MatchCreationForm';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useFormContext } from 'react-hook-form';
import { getSportRating } from '../../helpers/getSportRating';
import { useEffect } from 'react';

interface IConfigMatchModal {
  sport: string;
  openState: boolean;
  handleModal: (val?: boolean) => void;
  handleNext: () => void;
}

export const ConfigMatchModal: React.FC<IConfigMatchModal> = ({
  sport,
  openState,
  handleModal,
  handleNext,
}) => {
  const { watch, setValue, reset } = useFormContext();
  const { isClass } = watch();

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
        <Button
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
      </Box>
    </ModalContainer>
  );
};
