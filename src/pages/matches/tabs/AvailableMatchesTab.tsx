import { Box, Button, IconButton, Typography } from '@mui/material';
import { isPlatform } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import {
  getAvailableMatches,
  getAvailableNoRatingMatches,
} from '../../../services/matches/service';
import { AdvancedFilterAvailableMatchesModal } from '../../../components/modals/AdvancedFilterAvailableMatchesModal';
import { FilterAvailableMatchesModal } from '../../../components/modals/FilterAvailableMatchesModal';
import { AvailableMatchCard } from '../../../components/molecules/match-cards/AvailableMatchCard';
import { ClubMultipleDatesCard } from '../../../components/molecules/ClubMultipleDatesCard';
import { EType, getDayFormat } from '../../../helpers/getTimeDateString';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { Accordion } from '../../../components/molecules/Accordion';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { getSportName } from '../../../helpers/getSportName';
import { getClubs } from '../../../services/club/service';
import { FormProvider, useForm } from 'react-hook-form';
import noResults from '../../../images/no-results.svg';
import useToggle from '../../../hooks/useToggle';
import { Sport } from '../../../types';

interface FilterFormDate {
  sport: string;
  gamedates: { value: Date }[];
  range: number;
  lat: number;
  long: number;
  time: string;
  times: { value: string }[];
}

const isMobile = isPlatform('mobile');

export function AvailableMatchesTab() {
  // hardcoded lat and long while real location is not specified
  const filterParams = useForm<FilterFormDate>({
    defaultValues: {
      sport: '',
      gamedates: [],
      range: 20000,
      lat: 55.130108,
      long: 25.07354,
    },
  });
  const { watch } = filterParams;
  const { sport, gamedates } = watch();
  const gameDatesToString = gamedates
    .map((date) => date.value.toLocaleDateString('en-ca'))
    .join(',');

  const [openFilterModal, setOpenFilterModal] = useToggle();
  const [openAdvancedFilterModal, setOpenAdvancedFilterModal] = useToggle();

  // Get Available matches
  const availableMatches = useQuery({
    queryKey: [`available-matches`],
    queryFn: () =>
      getAvailableMatches({ ...watch(), gamedates: gameDatesToString }),
    enabled: false,
  });
  const availableArray = availableMatches.data?.data;

  // Get available matches with out of lvl range
  const noRatingMatches = useQuery({
    queryKey: [`available-no-rating`],
    queryFn: () =>
      getAvailableNoRatingMatches({ ...watch(), gamedates: gameDatesToString }),
    enabled: false,
  });
  const noRatingArray = noRatingMatches.data?.data;

  // Get available clubs
  const clubs = useQuery({
    queryKey: ['clubs'],
    queryFn: () => getClubs(gameDatesToString),
    enabled: false,
  });

  const clubsArray = clubs.data;

  const onFiltersApply = () => {
    availableMatches.refetch();
    noRatingMatches.refetch();
    clubs.refetch();
    if (openFilterModal) setOpenFilterModal();
    if (openAdvancedFilterModal) setOpenAdvancedFilterModal();
  };

  const isMainFilters = !!sport && gamedates.length > 0;

  return (
    <Box position="relative">
      <Box
        position={isMobile ? 'fixed' : 'unset'}
        zIndex={1}
        width="100%"
        display="flex"
        alignItems="center"
        gap={1}
        bgcolor="#fff"
        borderBottom="1px solid #eaeaea"
        height={50}
        px={1}
      >
        {isMainFilters && (
          <IconButton
            onClick={() => setOpenAdvancedFilterModal()}
            sx={{ padding: 0 }}
            disabled
          >
            <TuneOutlinedIcon />
          </IconButton>
        )}

        {isMainFilters ? (
          <Box
            display="flex"
            overflow="auto"
            gap={1}
            onClick={() => setOpenFilterModal()}
          >
            <Typography
              px={2}
              py={0.5}
              bgcolor="#0D2433"
              color="#fff"
              borderRadius={5}
              fontSize={13}
              lineHeight={1.2}
              whiteSpace="nowrap"
            >
              {getSportName(sport as Sport)}
            </Typography>
            <Typography
              px={2}
              py={0.5}
              bgcolor="#0D2433"
              color="#fff"
              borderRadius={5}
              fontSize={13}
              lineHeight={1.2}
              whiteSpace="nowrap"
            >
              {gamedates
                .map((date) => getDayFormat(date.value, EType.MONTH_AND_DAY))
                .join(' | ')}
            </Typography>
          </Box>
        ) : (
          <Button
            onClick={() => setOpenFilterModal()}
            sx={{
              fontSize: 13,
              color: '#333',
              border: '1px solid #eee',
              borderRadius: 5,
              padding: 0,
              paddingX: 1,
            }}
          >
            Спорт | Клубы | Даты и время
          </Button>
        )}
      </Box>
      <Box
        maxWidth={isMobile ? 'unset' : 1000}
        mb={isMobile ? '2.5rem' : 'unset'}
        px={isMobile ? '10px' : '2rem'}
        pt={6}
        pb="1.25rem"
      >
        {isMainFilters ? (
          <>
            <Accordion
              title="Для вашего уровня"
              description="Эти матчи полностью соответствуют вашему запросу и текущему уровню"
            >
              <Box display="flex" gap={1.5} overflow="auto" pb={1}>
                {availableMatches.isLoading ? (
                  <LoadingCircle />
                ) : !availableArray || availableArray.length === 0 ? (
                  <Typography
                    textAlign="center"
                    width="100%"
                    mt={3}
                    color="gray"
                  >
                    На данный момент нет доступных матчей для вашего уровня по
                    текущему запросу
                  </Typography>
                ) : (
                  availableArray.map((card, index) => {
                    return <AvailableMatchCard key={index} matchData={card} />;
                  })
                )}
              </Box>
            </Accordion>
            <Accordion
              title="Запросить место"
              description="Эти матчи не соответствуют вашему текущему уровню. Вам необходимо сделать запрос на присоединение"
            >
              <Box display="flex" gap={1.5} overflow="auto" pb={1}>
                {noRatingMatches.isLoading ? (
                  <LoadingCircle />
                ) : !noRatingArray || noRatingArray.length === 0 ? (
                  <Typography
                    textAlign="center"
                    width="100%"
                    mt={3}
                    color="gray"
                  >
                    На данный момент нет доступных матчей по текущему запросу
                  </Typography>
                ) : (
                  noRatingArray.map((card, index) => {
                    return <AvailableMatchCard key={index} matchData={card} />;
                  })
                )}
              </Box>
            </Accordion>
            <Accordion
              title="Стать первым игроком!"
              description="Создайте новый матч, выбрав подходящее время"
            >
              <Box
                display="flex"
                flexDirection={isMobile ? 'column' : 'row'}
                gap={2}
                width="100%"
              >
                {!clubsArray || clubsArray.length === 0 ? (
                  <Typography
                    textAlign="center"
                    width="100%"
                    mt={3}
                    color="gray"
                  >
                    На данный момент нет доступных матчей
                  </Typography>
                ) : (
                  clubsArray.map((club, index) => {
                    return <ClubMultipleDatesCard key={index} {...club} />;
                  })
                )}
              </Box>
            </Accordion>
          </>
        ) : (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={noResults}
              width="100%"
              maxWidth={isMobile ? 250 : 500}
            />
            <Button onClick={() => setOpenFilterModal()} sx={{ fontSize: 14 }}>
              Настройте фильтры, что бы увидеть доступные матчи
            </Button>
          </Box>
        )}
      </Box>

      <FormProvider {...filterParams}>
        <FilterAvailableMatchesModal
          openState={openFilterModal}
          handleModal={setOpenFilterModal}
          onApply={onFiltersApply}
        />
        <AdvancedFilterAvailableMatchesModal
          openState={openAdvancedFilterModal}
          handleModal={setOpenAdvancedFilterModal}
          onApply={onFiltersApply}
        />
      </FormProvider>
    </Box>
  );
}
