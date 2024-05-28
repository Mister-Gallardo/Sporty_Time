import { isPlatform } from '@ionic/react';
import { Box, Typography } from '@mui/material';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { ClassCard } from '../../../components/molecules/ClassCard';
import { useQuery } from '@tanstack/react-query';
import { getClasses } from '../../../services/classes';
import { NotFoundPage } from '../../../components/NotFoundPage';

const isMobile = isPlatform('mobile');

export const AvailableClassesTab = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['classes'],
    queryFn: getClasses,
  });
  const classesList = data?.data;

  if (isError) return <NotFoundPage />;

  return (
    <Box position="relative">
      <Box
        pt={3}
        display="flex"
        flexDirection={isMobile ? 'column' : 'unset'}
        justifyContent="center"
        flexWrap="wrap"
        gap={1.5}
      >
        {isLoading ? (
          <LoadingCircle />
        ) : !classesList || classesList.length === 0 ? (
          <Typography textAlign="center" width="100%" mt={3} color="gray">
            Нет результатов. По Вашему запросу нет доступных занятий
          </Typography>
        ) : (
          classesList.map((classData) => {
            const bookedPlacesAmount = classData?.classBookings?.length || 0;
            const isFillfilled = bookedPlacesAmount === classData?.playersCount;
            if (isFillfilled) return;

            return <ClassCard key={classData.id} {...classData} />;
          })
        )}
      </Box>
    </Box>
  );
};
