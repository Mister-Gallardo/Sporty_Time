import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useFormContext } from 'react-hook-form';

export const SearchChatField = () => {
  const { register } = useFormContext();
  return (
    <Box
      height={60}
      px={3}
      display="flex"
      alignItems="center"
      borderBottom="1px solid #eee"
    >
      <TextField
        {...register('searchTerm')}
        placeholder="Поиск чата..."
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon sx={{ mr: 1 }} />,
          disableUnderline: true,
        }}
      />
    </Box>
  );
};
