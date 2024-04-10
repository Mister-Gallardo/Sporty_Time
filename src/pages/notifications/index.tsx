import { Box, Typography } from '@mui/material';

const fakeList = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10];

export function NotificationsPage() {
  return (
    <Box width="100%" maxWidth={1240} m="0 auto" px={2}>
      {fakeList.map((notification) => {
        return (
          <Box key={notification} borderBottom="1px solid #eee">
            <Typography>Title</Typography>
            <Typography>date</Typography>
          </Box>
        );
      })}
    </Box>
  );
}
