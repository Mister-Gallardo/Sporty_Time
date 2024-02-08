import { Avatar, Box, Button, Fade, Typography } from '@mui/material';
import {
  SportsBaseballOutlined,
  SportsBasketballOutlined,
  SportsTennisOutlined,
} from '@mui/icons-material';
import { usePlayerProfile } from '../../../services/api/hooks';
import { SportTypeRow } from '../components/SportTypeRow';
import { BgContainer } from '../components/BgContainer';
import { useHistory } from 'react-router';
import { getSportRating } from '../../../helpers/getSportRating';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useMutation } from '@tanstack/react-query';
import { editUserProfile } from '../../../services/user/service';
import { useIonToast } from '@ionic/react';
import { useSearchParam } from '../../../hooks/useSearchParams';
import { ESport } from '../../../services/matches/interface';
import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';

interface ChooseYourSportProps {
  handleStep: (step: number) => void;
}

export function ChooseYourSport({ handleStep }: ChooseYourSportProps) {
  const history = useHistory();
  const [selectedSport, setSelectedSport] = useSearchParam(
    'sport',
    ESport.PADEL,
  );
  const [, setMatchSport] = useLocalStorage('matchesFilter', {
    sport: selectedSport,
  });
  const [, setClubSport] = useLocalStorage('clubsFilter', {
    sport: selectedSport,
  });

  useEffect(() => {
    setMatchSport({ sport: selectedSport });
    setClubSport({ sport: selectedSport });
  }, [selectedSport]);

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
    <>
      <Fade in>
        <Box>
          <BgContainer>
            <Box color="#fff">
              <Typography fontSize={22} fontWeight={600} textAlign="center">
                Привет {player?.user?.firstname}!
              </Typography>
              <Typography textAlign="center">
                Заполните свой профиль, чтобы максимально использовать
                возможности Sportytime
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt={2}
                mb={3}
              >
                <Avatar
                  src={player?.user?.avatar}
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
                  type={ESport.PADEL}
                  icon={<SportsBaseballOutlined />}
                  level={player?.ratingPadel}
                  isActive={selectedSport === ESport.PADEL}
                  onClick={() => setSelectedSport(ESport.PADEL)}
                />
                <SportTypeRow
                  type={ESport.TENNIS}
                  icon={<SportsBasketballOutlined />}
                  level={player?.ratingTennis}
                  isActive={selectedSport === ESport.TENNIS}
                  onClick={() => setSelectedSport(ESport.TENNIS)}
                />
                <SportTypeRow
                  type={ESport.PICKLEBALL}
                  icon={<SportsTennisOutlined />}
                  level={player?.ratingPickleball}
                  isActive={selectedSport === ESport.PICKLEBALL}
                  onClick={() => setSelectedSport(ESport.PICKLEBALL)}
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
                      setSelectedSport(selectedSport);
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
        </Box>
      </Fade>
    </>
  );
}
