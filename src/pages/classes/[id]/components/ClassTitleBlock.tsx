import { isPlatform } from '@ionic/react';
import { Box, Stack, Typography } from '@mui/material';
import classImage from '../../../../images/matches/bgpadel_matchdetail.png';
const isDesktop = isPlatform('desktop');

export const ClassTitleBlock = () => {
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
          <Typography color="error.main">available places text</Typography>
          <Typography fontSize={19}>Class title text</Typography>
        </Box>
      </Stack>
      <Typography
        mt={1}
        color="gray"
        textAlign={isDesktop ? 'center' : 'unset'}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        non facere magnam omnis sunt itaque.
      </Typography>
      <Box
        mt={2}
        display="flex"
        justifyContent={isDesktop ? 'center' : 'unset'}
        gap={1.5}
      >
        <Typography
          textTransform="uppercase"
          color="#696969"
          px={2}
          border="1px solid #eee"
          py={0.5}
        >
          sport
        </Typography>
        <Typography
          textTransform="uppercase"
          color="#696969"
          px={2}
          border="1px solid #eee"
          py={0.5}
        >
          class type
        </Typography>
      </Box>
    </Box>
  );
};
