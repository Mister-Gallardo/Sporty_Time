import { SvgIconComponent } from '@mui/icons-material';
import { Box, FormControlLabel, Radio, Typography } from '@mui/material';

export enum ERadioLabelType {
  WITH_ICON_AND_DESCRIPTION,
  TITLE_ONLY,
  WITH_DESCRIPTION,
}

interface IRadioLabelProps {
  value: string;
  labelType: ERadioLabelType;
  title: string;
  description?: string;

  // add correct type!
  icon?: any | SvgIconComponent;
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
      sx={{ alignItems: 'flex-start', gap: 1, margin: 0 }}
      value={value}
      control={<Radio sx={{ padding: 0 }} />}
      label={
        <Box>
          {labelType === ERadioLabelType.WITH_ICON_AND_DESCRIPTION ? (
            <>
              <Box>
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
