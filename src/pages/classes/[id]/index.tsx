import { ClassTitleBlock } from './components/ClassTitleBlock';
import { MainClassInfoBlock } from './components/MainClassInfoBlock';
import { AdditionalClassInfoBlock } from './components/AdditionalClassInfoBlock';
import { ClassPlayersBlock } from './components/ClassPlayersBlock';
import { ClubInfoBlock } from './components/ClubInfoBlock';
import { Box, Stack } from '@mui/material';
import { isPlatform } from '@ionic/react';

const isDesktop = isPlatform('desktop');

export function SingleClassesPage() {
  return (
    <Box width="100%" maxWidth={1240} m="0 auto" px={2} mt={2} mb={4}>
      <Stack spacing={isDesktop ? 3 : 2.5}>
        <ClassTitleBlock />

        <Stack spacing={2.5} direction={isDesktop ? 'row' : 'column'}>
          <MainClassInfoBlock />
          <AdditionalClassInfoBlock />
        </Stack>

        <ClassPlayersBlock />
        <ClubInfoBlock />
      </Stack>
    </Box>
  );
}
