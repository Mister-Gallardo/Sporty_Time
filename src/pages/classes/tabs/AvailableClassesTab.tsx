import { isPlatform } from '@ionic/react';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { ClassCard } from '../../../components/molecules/ClassCard';
import TuneIcon from '@mui/icons-material/Tune';

const isMobile = isPlatform('mobile');

export const AvailableClassesTab = () => {
  const isLoading = false;
  const data = [
    1, 2, 3, 44, 53424, 5245, 5675, 6896, 6676, 372, 7345, 38, 3458,
  ];

  return (
    <Box position="relative">
      <Box
        position={isMobile ? 'fixed' : 'unset'}
        left={0}
        zIndex={1}
        width="100%"
        bgcolor="#fff"
        borderBottom="1px solid #eaeaea"
        display="flex"
        alignItems="center"
        height={50}
        px={2}
      >
        <IconButton sx={{ p: 0 }}>
          <TuneIcon />
        </IconButton>
      </Box>

      <Box
        pt={7}
        display="flex"
        flexDirection={isMobile ? 'column' : 'unset'}
        justifyContent="center"
        flexWrap="wrap"
        gap={1.5}
      >
        {isLoading ? (
          <LoadingCircle />
        ) : !data || data.length === 0 ? (
          <Typography textAlign="center" width="100%" mt={3} color="gray">
            Нет результатов. По Вашему запросу нет доступных занятий
          </Typography>
        ) : (
          data.map((classData) => <ClassCard key={classData} />)
        )}
      </Box>
    </Box>
  );
};
