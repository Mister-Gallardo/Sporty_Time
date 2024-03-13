import Markdown from 'markdown-to-jsx';
import policyRu from './policy.ru.md?raw';
import { Box } from '@mui/material';

export const PrivacyPolicyPage = () => {
  return (
    <Box maxWidth={1240} width="100%" mx="auto" my={10} px={{ xs: 2, sm: 5 }}>
      <Box component={Markdown} lineHeight={2}>
        {policyRu}
      </Box>
    </Box>
  );
};

export default PrivacyPolicyPage;
