import { Box, FormControlLabel, Radio, Typography } from '@mui/material';
import { ERadioLabelType } from '../../types';

interface IRadioLabelProps {
  value: string;
  labelType: ERadioLabelType;
  title: string;
  description?: string;
  icon?: any;
}

export const RadioLabel = ({
  value,
  labelType,
  title,
  description,
  icon,
}: IRadioLabelProps) => {
  return (
    <FormControlLabel
      sx={{
        alignItems:
          labelType === ERadioLabelType.TITLE_ONLY ? 'center' : 'flex-start',
        gap: 1,
        margin: 0,
      }}
      value={value}
      control={<Radio sx={{ padding: 0 }} />}
      label={
        <Box>
          {labelType === ERadioLabelType.WITH_ICON_AND_DESCRIPTION ? (
            <>
              <Box display="flex" alignItems="center" gap={1}>
                {icon}
                <Typography fontSize={14} fontWeight={600}>
                  {title}
                </Typography>
              </Box>
              <Typography>{description} </Typography>
            </>
          ) : labelType === ERadioLabelType.TITLE_ONLY ? (
            <Typography fontSize={14} fontWeight={600}>
              {title}
            </Typography>
          ) : labelType === ERadioLabelType.WITH_DESCRIPTION ? (
            <>
              <Typography fontSize={14} fontWeight={600}>
                {title}
              </Typography>
              <Typography>{description} </Typography>
            </>
          ) : null}
        </Box>
      }
    />
  );
};
