import { Avatar, Stack, Typography } from '@mui/material';

export const ClassPlayerSlot = () => {
  return (
    <Stack alignItems="center">
      <Avatar />
      <Typography fontSize={12} maxWidth={70} noWrap>
        NameNameNameNameName
      </Typography>
      <Typography fontSize={10}>Rating</Typography>
    </Stack>
  );
};
