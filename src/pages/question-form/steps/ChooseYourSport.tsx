import { useState } from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import {
  SportsBaseballOutlined,
  SportsBasketballOutlined,
  SportsTennisOutlined,
} from '@mui/icons-material';
import { usePlayerProfile } from '../../../services/api/hooks';
import { SportTypeRow } from '../components/SportTypeRow';
import { BgContainer } from '../components/BgContainer';
import { useHistory } from 'react-router';
import { Sport } from '../../../types';
import { getSportRating } from '../../../helpers/getSportRating';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useMutation } from '@tanstack/react-query';
import { editUserProfile } from '../../../services/user/service';
import { useIonToast } from '@ionic/react';
import useSearchParams from '../../../hooks/useSearchParams';

interface ChooseYourSportProps {
  firstName: string;
  handleStep: (step: number) => void;
}

export function ChooseYourSport({
  handleStep,
  firstName,
}: ChooseYourSportProps) {
  const history = useHistory();
  const [getParam, setParam] = useSearchParams();

  const searchSport = getParam('sport');
  const [selectedSport, setSelectedSport] = useState<Sport | string>(
    searchSport ? searchSport : Sport.PADEL,
  );

  const [player, query] = usePlayerProfile();
  const currentSportRate = player ? getSportRating(player, selectedSport) : '';

  const [showToast] = useIonToast();

  const addPhotoMutation = useMutation({
    mutationFn: editUserProfile,
    onSuccess() {
      showToast({
        color: 'success',
        message: 'Новое фото профиля добавлено!',
        mode: 'ios',
       position: 'bottom',
        duration: 2000,
      });
      query.refetch();
    },
    onError() {
      showToast({
        color: 'danger',
        message: 'Произошла ошибка! Попробуйте ещё раз.',
        mode: 'ios',
       position: 'bottom',
        duration: 2000,
      });
    },
  });

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      correctOrientation: false,
    });

    if (!photo.webPath) return;

    const formData = new FormData();

    try {
      const res = await fetch(photo.webPath);
      const imageBlob = await res.blob();
      formData.append('image', imageBlob);
    } catch (error) {
      console.log(error);
    }

    addPhotoMutation.mutate(formData);
  };

  return (
    <BgContainer>
      <Box color="#fff">
        <Typography fontSize={22} fontWeight={600} textAlign="center">
          Привет {firstName}!
        </Typography>
        <Typography textAlign="center">
          Заполните свой профиль, чтобы максимально использовать возможности
          Sportytime
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={2}
          mb={3}
        >
          <Avatar
            src={`https://playpadel.lakileki.ru${player?.user?.avatar}`}
            sx={{
              width: '75px',
              height: '75px',
              border: '2px solid #fff',
            }}
          />
          <Button onClick={takePhoto} sx={{ color: '#fff' }}>
            Изменить фото
          </Button>
        </Box>
      </Box>
      <Box mb={5} color="#fff">
        <Typography textAlign="center" mb={4}>
          Для какого вида спорта Вы хотите узнать уровень?
        </Typography>
        <Box>
          <SportTypeRow
            type={Sport.PADEL}
            icon={<SportsBaseballOutlined />}
            level={player?.ratingPadel}
            isActive={selectedSport === Sport.PADEL}
            onClick={() => {
              setParam('sport', Sport.PADEL);
              setSelectedSport(Sport.PADEL);
            }}
          />
          <SportTypeRow
            type={Sport.TENNIS}
            icon={<SportsBasketballOutlined />}
            level={player?.ratingTennis}
            isActive={selectedSport === Sport.TENNIS}
            onClick={() => {
              setParam('sport', Sport.TENNIS);
              setSelectedSport(Sport.TENNIS);
            }}
          />
          <SportTypeRow
            type={Sport.PICKLEBALL}
            icon={<SportsTennisOutlined />}
            level={player?.ratingPickleball}
            isActive={selectedSport === Sport.PICKLEBALL}
            onClick={() => {
              setParam('sport', Sport.PICKLEBALL);
              setSelectedSport(Sport.PICKLEBALL);
            }}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        gap={1}
        width="100%"
        height={90}
      >
        {currentSportRate ? (
          <Button
            onClick={() => history.push('/')}
            variant="contained"
            sx={{ borderRadius: 20 }}
          >
            Продолжить
          </Button>
        ) : (
          <>
            <Button
              onClick={() => {
                handleStep(1);
                localStorage.setItem('sport', selectedSport);
              }}
              variant="contained"
              sx={{ borderRadius: 20 }}
            >
              Начать
            </Button>
            <Button
              onClick={() => history.push('/')}
              variant="text"
              sx={{ borderRadius: 20 }}
            >
              Не сейчас
            </Button>
          </>
        )}
      </Box>
    </BgContainer>
  );
}
