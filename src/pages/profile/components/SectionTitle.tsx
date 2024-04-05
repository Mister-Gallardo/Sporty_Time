import { isPlatform } from '@ionic/react';
import { Typography } from '@mui/material';
import React from 'react';

const isMobile = isPlatform('mobile');

interface ISectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<ISectionTitleProps> = ({ title }) => {
  return (
    <Typography fontWeight={600} mb={1} fontSize={isMobile ? 15 : 18}>
      {title}
    </Typography>
  );
};
