import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Fade,
  Typography,
} from '@mui/material';
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
import { Camera } from '@capacitor/camera';
import { useMutation } from '@tanstack/react-query';
import { editUserProfile } from '../../../services/user/service';
import { useIonToast } from '@ionic/react';
import { useSearchParam } from '../../../hooks/useSearchParams';
import { ESport } from '../../../services/matches/interface';
import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { withHostname } from '../../../services/api/service';

interface ChooseYourSportProps {
  handleStep: (step: number) => void;
}

export function ChooseYourSport({ handleStep }: ChooseYourSportProps) {
  const history = useHistory();
  const [selectedSport, setSelectedSport] = useSearchParam(
    'sport',
    ESport.PADEL,
  );
  const [, setSport] = useLocalStorage('sport', selectedSport);

  useEffect(() => {
    setSport(selectedSport);
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
    onError(e: any) {
      const message = e?.response?.data?.message;
      if (!message) return;

      showToast({
        color: 'danger',
        message,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
  });

  const takePhoto = async () => {
    const { photos } = await Camera.pickImages({
      quality: 100,
      correctOrientation: false,
    });
    const photo = photos[0].webPath;

    if (!photo) return;

    const formData = new FormData();

    try {
      const res = await fetch(photo);
      const imageBlob = await res.blob();
      formData.append('avatar', imageBlob);
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
                  src={withHostname(player?.user?.avatar?.formats?.small || '')}
                  sx={{
                    width: '75px',
                    height: '75px',
                    border: '2px solid #fff',
                  }}
                />
                <Button
                  onClick={takePhoto}
                  disabled={addPhotoMutation.isPending}
                  endIcon={
                    addPhotoMutation.isPending && <CircularProgress size={25} />
                  }
                  sx={{ color: '#fff' }}
                >
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
              {query.isLoading ? (
                <LoadingCircle />
              ) : currentSportRate ? (
                <Button onClick={() => history.push('/')} variant="contained">
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
                  >
                    Начать
                  </Button>
                  <Button
                    onClick={() => history.push('/')}
                    variant="text"
                    sx={{ color: '#fff' }}
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
