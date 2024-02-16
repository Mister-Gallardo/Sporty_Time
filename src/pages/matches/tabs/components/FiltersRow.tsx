import React, { useMemo } from 'react';
import { isPlatform } from '@ionic/react';
import { useFormContext } from 'react-hook-form';
import { SelectedFilterButton } from '../../../../components/modals/filters-modals/SelectedFilterButton';
import { EType, getDayFormat } from '../../../../helpers/getTimeDateString';
import { useSearchParam } from '../../../../hooks/useSearchParams';
import { getSportName } from '../../../../helpers/getNameOf';
import { Box, Typography } from '@mui/material';
import { isBefore, isToday } from 'date-fns';

interface IFiltersRowProps {
  handleModal: () => void;
}

const isMobile = isPlatform('mobile');

export const FiltersRow: React.FC<IFiltersRowProps> = ({ handleModal }) => {
  const [, setQ] = useSearchParam('q');

  const { watch } = useFormContext();
  const { sport, gamedates, clubsId } = watch();

  const datesList = useMemo(() => {
    const sortedDates = gamedates?.sort(
      (a: { value: string }, b: { value: string }) =>
        new Date(a.value).getTime() - new Date(b.value).getTime(),
    );

    const filteredDates = sortedDates?.filter((date: { value: string }) => {
      return (
        !isBefore(new Date(date.value), new Date()) ||
        isToday(new Date(date.value))
      );
    });

    const formatedDates = filteredDates
      ?.map((date: { value: Date }) =>
        getDayFormat(date.value, EType.MONTH_AND_DAY),
      )
      .join(' | ');

    return formatedDates;
  }, [gamedates]);

  return (
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
      <Box
        width="100%"
        display="flex"
        overflow="auto"
        gap={1}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
        }}
      >
        <SelectedFilterButton
          handleClick={() => {
            setQ('1');
            handleModal();
          }}
        >
          {getSportName(sport)}
        </SelectedFilterButton>

        <SelectedFilterButton
          handleClick={() => {
            setQ('3');
            handleModal();
          }}
        >
          {clubsId ? `Клубы | ${clubsId.length}` : 'Выбрать клуб'}
        </SelectedFilterButton>

        <SelectedFilterButton
          handleClick={() => {
            setQ('4');
            handleModal();
          }}
        >
          <Typography maxWidth={200} noWrap>
            {datesList ? datesList : 'Выбрать дату'}
          </Typography>
        </SelectedFilterButton>
      </Box>
    </Box>
  );
};
