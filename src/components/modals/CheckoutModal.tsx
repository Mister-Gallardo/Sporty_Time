import React, { useState } from 'react';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { Box, Button, Divider, RadioGroup, Typography } from '@mui/material';
import { EType, getDayFormat } from '../../helpers/getTimeDateString';
import { ERadioLabelType, RadioLabel } from '../molecules/RadioLabel';
import { ModalContainer } from './ModalContainer';
import { currentTimeInCLubTimezone } from '../../helpers/getMatchStatus';
import { Court } from '../../services/club/interface';
import { differenceInHours, format, parseISO } from 'date-fns';

interface ICheckoutModal {
  price: number;
  court: Court;
  date: Date;
  startTime: string;
  playTime: number;
  timezone: string;
  openState: boolean;
  handleModal: (val?: boolean) => void;
  handleCheckout: (total: number) => void;
}

export const CheckoutModal: React.FC<ICheckoutModal> = (props) => {
  const {
    price,
    court,
    openState,
    date,
    startTime,
    playTime,
    timezone,
    handleModal,
    handleCheckout,
  } = props;

  const [payFor, setPayFor] = useState('0');
  const selectedPayment = payFor === '0' ? price / 4 : price;

  const matchDate = getDayFormat(
    date,
    EType.WEEK_DAY_MONTH,
    startTime,
    playTime,
  );

  const priceFor3 = price - price / 4;

  // user must pay full price if there's < 12h left before the match
  const currentTime = timezone ? currentTimeInCLubTimezone(timezone) : 0;

  const matchStartTime = parseISO(
    `${format(new Date(date), 'yyyy-MM-dd')}T${startTime}:00`,
  );
  const timeDifference = differenceInHours(matchStartTime, currentTime);

  const isPayingFullPrice = timeDifference < 12;
  const total = isPayingFullPrice ? price : selectedPayment;

  const tags = court.tags.map((tag) => tag.title).join(' | ');
  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Оплата"
    >
      <>
        <Box display="flex" flexDirection="column" gap={4} mb={4}>
          {court && (
            <Box border="1px solid #ddd" borderRadius={2} py={1} px={2}>
              <Box display="flex" justifyContent="space-between" py={1}>
                <Box flexGrow={1} pr={1}>
                  <Typography textTransform="capitalize">
                    {matchDate}
                  </Typography>
                  <Typography>
                    {court.sport}, {court.title}
                  </Typography>
                  <Typography color="gray" fontSize={12}>
                    {tags}
                  </Typography>
                </Box>

                <Divider orientation="vertical" flexItem variant="middle" />

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  pl={2}
                  pr={1}
                >
                  <HistoryToggleOffOutlinedIcon />
                  <Typography noWrap>{playTime} мин</Typography>
                </Box>
              </Box>
              {!isPayingFullPrice && (
                <>
                  <Divider />
                  <Box my={2}>
                    <RadioGroup
                      name="select payment"
                      sx={{ gap: 2 }}
                      value={payFor}
                      onChange={(e) => setPayFor(e.target.value)}
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        gap={1}
                      >
                        <RadioLabel
                          value="0"
                          labelType={ERadioLabelType.WITH_ICON_AND_DESCRIPTION}
                          icon={<CreditCardOutlinedIcon />}
                          title="Оплатить свою часть"
                          description={`Если другие игроки не заплатят свою часть за 12 часов до начала матча - вы должны будете доплатить ${priceFor3} RUB`}
                        />
                        <Typography whiteSpace="nowrap">
                          {price / 4} RUB
                        </Typography>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        gap={1}
                      >
                        <RadioLabel
                          value="1"
                          labelType={ERadioLabelType.WITH_ICON_AND_DESCRIPTION}
                          icon={<CreditCardOutlinedIcon />}
                          title="Оплатить полностью"
                        />
                        <Typography noWrap>{price} RUB</Typography>
                      </Box>
                    </RadioGroup>
                  </Box>
                </>
              )}
            </Box>
          )}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={2}
          >
            <Box>
              <Typography fontWeight={600}>Итог</Typography>
              <Typography fontSize={12} color="gray" lineHeight={1.2}>
                Плата за услуги Sportytime и налоги включительно
              </Typography>
            </Box>
            <Typography color="primary.main" whiteSpace="nowrap" fontSize={20}>
              {total} RUB
            </Typography>
          </Box>
        </Box>

        <Box py={1.5} px={2} borderTop="1px solid #ddd">
          <Button
            onClick={() => handleCheckout(total)}
            variant="contained"
            sx={{
              backgroundColor: '#0d2432',
              borderRadius: 10,
              '&:hover': {
                backgroundColor: '#123347',
              },
            }}
            fullWidth
          >
            Продолжить оплату
          </Button>
        </Box>
      </>
    </ModalContainer>
  );
};
