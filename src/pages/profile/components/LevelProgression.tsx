import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { ToggleButton } from '../../../components/atoms/ToggleButton';
import { RatingChart } from '../../../components/molecules/RatingChart';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { SectionTitle } from './SectionTitle';
import { isPlatform } from '@ionic/react';
// import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const results = [
  {
    id: '5',
    title: '5 результатов',
  },
  {
    id: '10',
    title: '10 результатов',
  },
  {
    id: 'ALL',
    title: 'Все результаты',
  },
];

interface ILevelProgressionProps {}

const isMobile = isPlatform('mobile');

export const LevelProgression: React.FC<ILevelProgressionProps> = () => {
  const [activeResults, setActiveResults] = useState('5');

  return (
    <Box width="100%">
      <SectionTitle title="Прогресс уровня" />
      <Box>
        <Box
          mb={1}
          pb={1}
          display="flex"
          justifyContent={isMobile ? 'unset' : 'center'}
          width="100%"
          overflow="auto"
          gap={1}
        >
          {results.map((item) => (
            <ToggleButton
              key={item.id}
              value={item.id}
              aria-label={item.title}
              onClick={() => setActiveResults(item.id)}
              selected={activeResults === item.id}
            >
              {item.title}
            </ToggleButton>
          ))}
        </Box>
        <Link
          to=""
          style={{
            display: 'flex',
            justifyContent: isMobile ? 'unset' : 'center',
            marginBottom: 30,
          }}
        >
          <Box
            border="1px solid #eee"
            p={1.5}
            width={isMobile ? '100%' : 'unset'}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Typography>match type</Typography>
              <Box display="flex" alignItems="center" gap={0.2}>
                <Typography
                  border="1px solid #eee"
                  px={0.7}
                  color="gray"
                  fontSize={11}
                >
                  match date
                </Typography>
                <ChevronRightIcon fontSize="small" />
              </Box>
            </Box>
            <Box display="flex">
              <Box>
                <Box
                  display="flex"
                  gap={0.5}
                  alignItems="center"
                  px={1.5}
                  borderBottom="1px solid #eee"
                  height={25}
                >
                  <Avatar sx={{ width: 20, height: 20 }} />
                  <Avatar sx={{ width: 20, height: 20 }} />
                </Box>
                <Box
                  display="flex"
                  gap={0.5}
                  alignItems="center"
                  px={1.5}
                  height={25}
                >
                  <Avatar sx={{ width: 20, height: 20 }} />
                  <Avatar sx={{ width: 20, height: 20 }} />
                </Box>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box flexGrow={1}>
                <Box
                  display="flex"
                  gap={5}
                  px={2}
                  justifyContent="space-between"
                  borderBottom="1px solid #eee"
                  height={25}
                  alignItems="center"
                >
                  <Typography>1</Typography>
                  <Typography>2</Typography>
                  <Typography>5</Typography>
                </Box>
                <Box
                  display="flex"
                  gap={5}
                  px={2}
                  justifyContent="space-between"
                  height={25}
                  alignItems="center"
                >
                  <Typography>1</Typography>
                  <Typography>2</Typography>
                  <Typography>5</Typography>
                </Box>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                px={2}
              >
                <Typography>Text</Typography>
                <TrendingUpIcon />
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                px={2}
              >
                <Typography>Text</Typography>
                <Typography>points</Typography>
              </Box>
            </Box>
          </Box>
        </Link>
      </Box>
      <RatingChart />
    </Box>
  );
};
