import { isPlatform } from '@ionic/react';
import { Box, Stack, Typography } from '@mui/material';
import classImage from '../../../../images/matches/bgpadel_matchdetail.png';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getClass } from '../../../../services/classes';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';
import { getSportName } from '../../../../helpers/getNameOf';
const isDesktop = isPlatform('desktop');

export const ClassTitleBlock = () => {
  const { classId } = useParams<{ classId: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ['classes', classId],
    queryFn: () => getClass(classId),
  });

  const classData = data?.data;

  if (isLoading) return <LoadingCircle />;
  if (!classData) return null;

  const { title, description, sport, isPrivate } = classData;
  return (
    <Box>
      <Stack
        direction={isDesktop ? 'column' : 'row'}
        alignItems={isDesktop ? 'center' : 'unset'}
        spacing={isDesktop ? 1 : 2}
      >
        <Box
          src={classImage}
          component="img"
          width={isDesktop ? 80 : 60}
          height={isDesktop ? 80 : 60}
          flexShrink={0}
        />
        <Box>
          <Typography
            textAlign={isDesktop ? 'center' : 'unset'}
            color="error.main"
          >
            available places text
          </Typography>
          <Typography textAlign={isDesktop ? 'center' : 'unset'} fontSize={19}>
            {title}
          </Typography>
        </Box>
      </Stack>
      {description && (
        <Typography
          mt={1}
          color="gray"
          textAlign={isDesktop ? 'center' : 'unset'}
        >
          {description}
        </Typography>
      )}
      <Box
        mt={2}
        display="flex"
        justifyContent={isDesktop ? 'center' : 'unset'}
        gap={1.5}
      >
        {sport && (
          <Typography
            textTransform="uppercase"
            color="#696969"
            px={2}
            border="1px solid #eee"
            py={0.5}
          >
            {getSportName(sport)}
          </Typography>
        )}

        <Typography
          textTransform="uppercase"
          color="#696969"
          px={2}
          border="1px solid #eee"
          py={0.5}
        >
          {isPrivate ? 'Приватное' : 'Открытое'} занятие
        </Typography>
      </Box>
    </Box>
  );
};
