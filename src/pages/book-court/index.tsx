import { useEffect } from 'react';
import { IonSpinner, isPlatform } from '@ionic/react';
import {
  Box,
  Button,
  IconButton,
  // Input,
  // InputAdornment,
  Stack,
} from '@mui/material';
import { AdvancedFilterClubsModal } from '../../components/modals/AdvancedFilterClubsModal';
// import SportsTennisOutlinedIcon from '@mui/icons-material/SportsTennisOutlined';
import { FilterClubsModal } from '../../components/modals/FilterClubsModal';
// import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { EType, getDayFormat } from '../../helpers/getTimeDateString';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { ClubCard } from '../../components/molecules/ClubCard';
// import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
// import NearMeSharpIcon from '@mui/icons-material/NearMeSharp';
import { FormProvider, useForm } from 'react-hook-form';
import { getClubs } from '../../services/club/service';
import noResults from '../../images/no-results.svg';
import { useQuery } from '@tanstack/react-query';
import useToggle from '../../hooks/useToggle';

interface FiltersFormData {
  date: Date;
  time: string;
}

const now = new Date();

const countDefaultTime = () => {
  const hours = now.getHours();
  const minutes = now.getMinutes();

  let defaultTime = '';
  if (minutes > 30) {
    defaultTime += hours !== 23 ? `${hours + 1}:00` : `${hours}:00`;
  } else {
    defaultTime += `${hours}:30`;
  }

  return defaultTime;
};

export function BookCourt() {
  const isMobile = isPlatform('mobile');

  const filterParams = useForm<FiltersFormData>({
    defaultValues: {
      date: now,
      time: countDefaultTime(),
    },
  });

  const { getValues } = filterParams;
  const { date, time } = getValues();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['clubs', date.toLocaleDateString('en-ca')],
    queryFn: () => getClubs(date.toLocaleDateString('en-ca')),
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, []);

  const [openFilterModal, setOpenFilterModal] = useToggle();
  const [openAdvancedFilterModal, setOpenAdvancedFilterModal] = useToggle();

  const onFilterApply = () => {
    refetch();
    if (openFilterModal) setOpenFilterModal();
    if (openAdvancedFilterModal) setOpenAdvancedFilterModal();
  };

  if (isLoading)
    return (
      <Stack alignItems="center" mt={5}>
        <IonSpinner />
      </Stack>
    );

  return (
    <>
      <Box
        position="fixed"
        zIndex={2}
        bgcolor="#fff"
        width="100%"
        px={2}
        pb={2}
        boxShadow="0 7px 8px -2px #0000000f"
      >
        {/* <Box display="flex" gap={1} mb={1}>
          <Input
            id="sport"
            placeholder="Sport"
            startAdornment={
              <InputAdornment position="start">
                <SportsTennisOutlinedIcon fontSize="small" />
              </InputAdornment>
            }
            fullWidth
            disableUnderline
            sx={{ bgcolor: '#f5f6f8', padding: 1, borderRadius: 1.5 }}
          />
          <IconButton
            sx={{
              backgroundColor: '#f5f6f8',
              borderRadius: 1.5,
              minWidth: '45px',
            }}
          >
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box display="flex" gap={1}>
          <Input
            id="location"
            placeholder="Location"
            startAdornment={
              <InputAdornment position="start">
                <FmdGoodOutlinedIcon fontSize="small" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <NearMeSharpIcon fontSize="small" />
              </InputAdornment>
            }
            fullWidth
            disableUnderline
            sx={{ bgcolor: '#f5f6f8', padding: 1, borderRadius: 1.5 }}
          />
          <IconButton
            sx={{
              backgroundColor: '#f5f6f8',
              borderRadius: 1.5,
              minWidth: '45px',
            }}
          >
            <MapOutlinedIcon fontSize="small" sx={{ color: '#000' }} />
          </IconButton>
        </Box> */}

        <Box mt={2} display="flex" gap={1.5} alignItems="center">
          <IconButton
            sx={{ padding: 0 }}
            onClick={() => setOpenAdvancedFilterModal()}
            disabled
          >
            <TuneOutlinedIcon fontSize="small" />
          </IconButton>
          <Button
            onClick={() => setOpenFilterModal()}
            sx={{
              backgroundColor: '#0D2433',
              color: '#fff',
              padding: 0,
              paddingX: 1.5,
              borderRadius: 5,
              fontSize: 13,
            }}
          >
            {getDayFormat(date, EType.MONTH_AND_DAY)} | {time}
          </Button>
        </Box>
      </Box>

      <Box
        // pt={20}
        pt={8}
        pb={5}
        sx={{
          paddingInline: isMobile ? '0' : '10px',
          display: 'grid',
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,500px))',
          marginTop: '.5rem',
          gap: '1rem',
          maxWidth: 1240,
          mx: 'auto',
        }}
      >
        {!data || data.length === 0 ? (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={noResults}
              width="100%"
              maxWidth={isMobile ? 250 : 500}
            />
            <Button onClick={() => setOpenFilterModal()} sx={{ fontSize: 14 }}>
              Свободных клубов не найдено. Настройте фильтры, что бы увидеть
              доступные клубы
            </Button>
          </Box>
        ) : (
          data?.map((club) => <ClubCard key={club.id} {...club} />)
        )}
      </Box>

      <FormProvider {...filterParams}>
        <FilterClubsModal
          openState={openFilterModal}
          handleModal={setOpenFilterModal}
          onApply={onFilterApply}
        />
        <AdvancedFilterClubsModal
          openState={openAdvancedFilterModal}
          handleModal={setOpenAdvancedFilterModal}
          onApply={onFilterApply}
        />
      </FormProvider>
    </>
  );
}
