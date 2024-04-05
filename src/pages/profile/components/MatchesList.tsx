import { Box } from '@mui/material';
import React from 'react';
import { SectionTitle } from './SectionTitle';
import { useQuery } from '@tanstack/react-query';
import { getMyMatches } from '../../../services/matches/service';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { MyMatchCard } from '../../../components/molecules/match-cards/MyMatchCard';

interface IMatchesListProps {}

export const MatchesList: React.FC<IMatchesListProps> = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['my-matches'],
    queryFn: () => getMyMatches(),
  });

  const myMatchesData = data?.data;
  return (
    <Box mt={4}>
      <SectionTitle title="Матчи" />
      <Box
        display="flex"
        gap={2}
        overflow="auto"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
        }}
      >
        {isLoading ? (
          <LoadingCircle />
        ) : (
          myMatchesData
            ?.map((card) => {
              return <MyMatchCard key={card.id} {...card} />;
            })
            ?.reverse()
        )}
      </Box>
    </Box>
  );
};
