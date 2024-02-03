import React from 'react';
import Markdown from 'markdown-to-jsx';
import aboutRu from './about.ru.md?raw';
import { Box } from '@mui/material';

export const AboutPage: React.FC = () => {
  return (
    <Box maxWidth={1240} width="100%" mx="auto" my={10} px={{ xs: 2, sm: 5 }}>
      <Box component={Markdown} lineHeight={2}>
        {aboutRu}
      </Box>
    </Box>
  );
};

export default AboutPage;
