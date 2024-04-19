import { isPlatform } from '@ionic/react';
import { Box, Button, Typography } from '@mui/material';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { ClassCard } from '../../../components/molecules/ClassCard';

const isMobile = isPlatform('mobile');

export const MyClassesTab = () => {
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
        display="flex"
        alignItems="center"
        gap={1}
        width="100%"
        bgcolor="#fff"
        borderBottom="1px solid #eaeaea"
        px={2}
        height={50}
      >
        <Button
          sx={{
            fontSize: 13,
            px: 1,
            py: 0.2,
            border: '1px solid #eee',
            minWidth: 'unset',
          }}
        >
          date
        </Button>
        <Button
          sx={{
            fontSize: 13,
            px: 1,
            py: 0.2,
            border: '1px solid #eee',
            minWidth: 'unset',
          }}
        >
          sport
        </Button>
        <Button
          sx={{
            fontSize: 13,
            px: 1,
            py: 0.2,
            border: '1px solid #eee',
            minWidth: 'unset',
          }}
        >
          classes
        </Button>
        <Button
          sx={{
            fontSize: 13,
            px: 1,
            py: 0.2,
            border: '1px solid #eee',
            minWidth: 'unset',
          }}
        >
          status
        </Button>
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
