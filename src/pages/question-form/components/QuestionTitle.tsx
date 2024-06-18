import { FormLabel } from '@mui/material';

export const QuestionTitle = ({ title }: { title: string }) => {
  return (
    <FormLabel
      component="legend"
      sx={{
        color: '#000',
        fontSize: 16,
        fontWeight: 600,
        marginBottom: 1,
      }}
    >
      {title}
    </FormLabel>
  );
};
