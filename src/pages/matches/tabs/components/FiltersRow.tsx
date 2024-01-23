import React from 'react';
import { isPlatform } from '@ionic/react';
import { useFormContext } from 'react-hook-form';
import { EType, getDayFormat } from '../../../../helpers/getTimeDateString';
import { getSportName } from '../../../../helpers/getSportName';
import { Box, Button, Typography } from '@mui/material';
import { Sport } from '../../../../types';

interface IFiltersRowProps {
  handleModal: () => void;
}

const isMobile = isPlatform('mobile');

export const FiltersRow: React.FC<IFiltersRowProps> = ({ handleModal }) => {
  const { watch } = useFormContext();
  const { sport, gamedates } = watch();

  const isMainFilters = !!sport && gamedates.length > 0;

  const onClearFilters = () => {
    localStorage.removeItem('availableMatchesFilters');
    window.location.reload();
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
      {isMainFilters ? (
        <>
          <Box
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
              maxWidth={210}
              noWrap
            >
              {gamedates
                .map((date: { value: Date }) =>
                  getDayFormat(date.value, EType.MONTH_AND_DAY),
                )
                .join(' | ')}
            </Typography>
          </Box>
          <Button
            onClick={onClearFilters}
            variant="outlined"
            sx={{
              fontSize: 13,
              borderRadius: 5,
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
