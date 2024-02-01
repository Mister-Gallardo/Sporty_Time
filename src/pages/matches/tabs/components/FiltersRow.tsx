import React from 'react';
import { isPlatform } from '@ionic/react';
import { useFormContext } from 'react-hook-form';
import { SelectedFilterButton } from '../../../../components/modals/filters-modals/SelectedFilterButton';
import { EType, getDayFormat } from '../../../../helpers/getTimeDateString';
import { getSportName } from '../../../../helpers/getSportName';
import { Box, Button, Typography } from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';
import { Sport } from '../../../../types';
import { useSearchParam } from '../../../../hooks/useSearchParams';

interface IFiltersRowProps {
  handleModal: () => void;
}

const isMobile = isPlatform('mobile');

export const FiltersRow: React.FC<IFiltersRowProps> = ({ handleModal }) => {
  const [, setQ] = useSearchParam('q');

  const { watch } = useFormContext();
  const { sport, gamedates, clubsId } = watch();

  const [localFilters, setLocalFilters] = useLocalStorage('matchesFilter', {});
  const isSomeFilter = Object.keys(localFilters).length !== 0;

  const onClearFilters = () => {
    setLocalFilters({});
  };

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
      {isSomeFilter ? (
        <>
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
              {getSportName(sport as Sport)}
            </SelectedFilterButton>
            <SelectedFilterButton
              handleClick={() => {
                setQ('3');
                handleModal();
              }}
            >
              <Typography maxWidth={200} noWrap>
                {gamedates
                  .map((date: { value: Date }) =>
                    getDayFormat(date.value, EType.MONTH_AND_DAY),
                  )
                  .join(' | ')}
              </Typography>
            </SelectedFilterButton>
            <SelectedFilterButton
              handleClick={() => {
                setQ('3');
                handleModal();
              }}
            >
              Клубы | {clubsId.length}
            </SelectedFilterButton>
          </Box>
          <Button
            onClick={onClearFilters}
            variant="outlined"
            sx={{
              fontSize: 13,
              py: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Сбросить все
          </Button>
        </>
      ) : (
        <Button
          onClick={() => handleModal()}
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
  );
};
