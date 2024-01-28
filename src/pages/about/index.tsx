import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import aboutRu from './about.ru.md?raw';
import { Box } from '@mui/material';

export const AboutPage: React.FC = () => {
  return (
    <Box maxWidth={1240} width="100%" mx="auto" my={10} px={{ xs: 2, sm: 5 }}>
      <Box component={Markdown} rehypePlugins={[rehypeRaw]} lineHeight={2}>
        {aboutRu}
      </Box>
    </Box>
  );
};
