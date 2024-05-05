import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getClass } from '../../../../services/classes';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';

export const MainClassInfoBlock = () => {
  const { classId } = useParams<{ classId: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ['classes', classId],
    queryFn: () => getClass(classId),
  });

  const classData = data?.data;

  if (isLoading) return <LoadingCircle />;
  if (!classData) return null;

  const booking = classData?.booking;
  const classDate = booking && new Date(booking?.startsAt);
  const classTime = booking?.startsAt && booking?.startsAt.split('T');

  return (
    <Box
      width="100%"
      border="1px solid #eee"
      p={1.5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box mb={1} display="flex" gap={0.5}>
        <PaidOutlinedIcon fontSize="small" />
        <Typography color="#696969">
          {classData?.price} руб. за место
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Stack alignItems="center">
          <Typography color="#696969">Дата:</Typography>
          <Typography fontWeight={600} fontSize={16}>
            {classTime[0]}
          </Typography>
        </Stack>

        <Divider orientation="vertical" flexItem variant="fullWidth" />

        <Stack alignItems="center">
          <Typography color="#696969">Начало:</Typography>
          <Typography fontWeight={600} fontSize={16}>
            {classTime[1]?.slice(0, 5)}
          </Typography>
        </Stack>

        <Divider orientation="vertical" flexItem variant="fullWidth" />
        <Stack alignItems="center">
          <AccessTimeOutlinedIcon />
          <Typography>{booking?.duration}мин.</Typography>
        </Stack>
      </Box>
    </Box>
  );
};
