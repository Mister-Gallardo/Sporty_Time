import { Box, Divider, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getClass } from '../../../../services/classes';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';

export const AdditionalClassInfoBlock = () => {
  const { classId } = useParams<{ classId: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['classes', classId],
    queryFn: () => getClass(classId),
  });

  const classData = data?.data;
  const classStartsAt = classData && new Date(classData?.booking?.startsAt);
  const registrationEndsAt =
    classStartsAt && new Date(classStartsAt.getTime() - 12 * 3600 * 1000);

  const registrationEndsDate = registrationEndsAt?.toISOString().split('T');

  if (isLoading) return <LoadingCircle />;
  if (!classData) return null;

  return (
    <Box width="100%" border="1px solid #eee" p={1.5}>
      <Typography color="#696969">Конец регистрации</Typography>
      {registrationEndsDate && (
        <Typography
          mb={2}
          textTransform="uppercase"
          fontWeight={600}
          flexGrow={1}
        >
          {registrationEndsDate[0]} | {registrationEndsDate[1].slice(0, 5)}
        </Typography>
      )}

      <Box display="flex" justifyContent="space-between" gap={2}>
        <Box>
          <Typography color="#696969">Категория</Typography>
          <Typography textTransform="uppercase" fontWeight={600} flexGrow={1}>
            {classData.isPrivate ? 'Приватное' : 'Открытое'} занятие
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem variant="fullWidth" />
        <Stack alignItems="center">
          <Typography color="#696969">Уровень</Typography>
          <Typography fontSize={16} fontWeight={600}>
            {classData?.ratingFrom} - {classData?.ratingTo}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
