import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { DateBox } from './DateBox';
import { useHistory } from 'react-router';

export default function NewMatchCard({ toggleConfigModal }: any) {
  const history = useHistory();

  return (
    <Card
      onClick={() => history.push('/book-court/1?tab=2')}
      sx={{
        boxShadow: '0px 0px 5px #e3e3e3',
      }}
    >
      <CardHeader
        avatar={
          <Box width={60} height={60} borderRadius={2} overflow="hidden">
            <img
              srcSet="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
              alt="img"
              loading="lazy"
            />
          </Box>
        }
        title="Forus Picornell"
        titleTypographyProps={{ fontSize: 18, fontWeight: 700 }}
        subheaderTypographyProps={{ fontSize: 16 }}
        subheader="2km Barcelona"
        sx={{ borderBottom: '1px solid #eee' }}
      />

      <CardContent>
        {[1, 2, 3, 4].map((item) => {
          return (
            <Box key={item}>
              <Typography fontWeight={700} mb={1}>
                0{item} Dec
              </Typography>
              <Box
                display="flex"
                gap={2}
                pb={1.2}
                overflow="auto"
                sx={{
                  scrollSnapType: 'x mandatory',
                  scrollBehavior: 'smooth',
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <DateBox
                    key={item}
                    startTime="7:00am"
                    gameDuration={60}
                    onClick={(e: Event) => {
                      e.stopPropagation();
                      toggleConfigModal();
                    }}
                  />
                ))}
              </Box>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
}
