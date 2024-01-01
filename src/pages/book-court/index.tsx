import { IonSpinner, isPlatform } from '@ionic/react';
import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import { AdvancedFilterClubsModal } from '../../components/modals/AdvancedFilterClubsModal';
import SportsTennisOutlinedIcon from '@mui/icons-material/SportsTennisOutlined';
import { FilterClubsModal } from '../../components/modals/FilterClubsModal';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { ClubCard } from '../../components/molecules/ClubCard';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import NearMeSharpIcon from '@mui/icons-material/NearMeSharp';
import { getClubs } from '../../services/club/service';
import { useQuery } from '@tanstack/react-query';
import useToggle from '../../hooks/useToggle';
const defaultDate = [new Date()];

export function BookCourt() {
  const isMobile = isPlatform('mobile');
  const { data, isLoading } = useQuery({
    queryKey: ['clubs', defaultDate],
    queryFn: () => getClubs(defaultDate),
  });

  const [openFilterModal, setOpenFilterModal] = useToggle();
  const [openAdvancedFilterModal, setOpenAdvancedFilterModal] = useToggle();

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
        <Box display="flex" gap={1} mb={1}>
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
        </Box>

        <Box mt={2} display="flex" gap={1.5} alignItems="center">
          <IconButton
            sx={{ padding: 0 }}
            onClick={() => setOpenAdvancedFilterModal()}
          >
            <TuneOutlinedIcon fontSize="small" sx={{ color: '#000' }} />
          </IconButton>
          <Typography onClick={() => setOpenFilterModal()}>
            default filter
          </Typography>
        </Box>
      </Box>

      <Box
        bgcolor={isMobile ? '#f5f6f8' : '#fff'}
        sx={{
          paddingTop: 20,
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
          <Typography textAlign="center" mt={3} color="gray">
            На данный момент нет доступных клубов по заданным параметрам
          </Typography>
        ) : (
          data?.map((club) => <ClubCard key={club.id} {...club} />)
        )}
      </Box>

      <FilterClubsModal
        openState={openFilterModal}
        handleModal={setOpenFilterModal}
      />
      <AdvancedFilterClubsModal
        openState={openAdvancedFilterModal}
        handleModal={setOpenAdvancedFilterModal}
      />
    </>
  );
}
