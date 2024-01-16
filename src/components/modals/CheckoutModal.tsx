import React, { useState } from 'react';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { Box, Button, Divider, RadioGroup, Typography } from '@mui/material';
import { EType, addTime, getDayFormat } from '../../helpers/getTimeDateString';
import { RadioLabel } from '../molecules/RadioLabel';
import { ERadioLabelType, ITag } from '../../types';
import { ModalContainer } from './ModalContainer';
import {
  currentTimeInCLubTimezone,
  parseDate,
} from '../../helpers/getMatchStatus';

interface MainCourtInfo {
  price: number;
  tags: ITag[] | [];
  date: string;
  startTime: string;
  playtime: number;
  sport: string;
  courtName: string;
  timezone?: string;
}

interface ICheckoutModal {
  isPaid?: boolean;
  isJoin?: boolean;
  courtData?: MainCourtInfo;
  openState: boolean;
  handleModal: (val?: boolean) => void;
  handleCheckout: (payPrice: number) => void;
}

export const CheckoutModal: React.FC<ICheckoutModal> = ({
  isPaid,
  isJoin,
  courtData,
  openState,
  handleModal,
  handleCheckout,
}) => {
  if (!courtData) return;

  const { price, tags, date, startTime, playtime, courtName, timezone } =
    courtData;

  const [payFor, setPayFor] = useState('0');

  const matchDate = getDayFormat(
    date,
    EType.WEEK_DAY_MONTH,
    startTime,
    playtime,
  );
  const paymentDeadline =
    getDayFormat(date, EType.MONTH_AND_DAY) +
    ' ' +
    addTime(startTime, playtime + 120);

  const total = isPaid ? 0 : payFor === '0' || isJoin ? price / 4 : price;
  const priceFor3 = price - price / 4;
  const courtTags = tags.length > 0 ? tags.map((tag: any) => tag.title) : [];

  // user must pay full price if there's < 12h left before the match
  const currentTime = timezone ? currentTimeInCLubTimezone(timezone) : 0;
  const matchData = new Date(date).toLocaleDateString('en-ca');
  const matchStartTime = parseDate(matchData, startTime, '');

  const isPayingFullPrice = (matchStartTime - currentTime) / 1000 / 3600 < 12;

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Оплата"
    >
      <>
        <Box display="flex" flexDirection="column" gap={4} mb={4}>
          {courtData && (
            <Box border="1px solid #ddd" borderRadius={2} py={1} px={2}>
              <Box display="flex" justifyContent="space-between" py={1}>
                <Box flexGrow={1} pr={1}>
                  <Typography textTransform="capitalize">
                    {matchDate}
                  </Typography>
                  <Box display="flex" gap={0.5}>
                    <Typography textTransform="lowercase">
                      {courtData?.sport},
                    </Typography>
                    <Typography>{courtName}</Typography>
                  </Box>
                  <Typography color="gray" fontSize={12}>
                    {courtTags?.join(' | ')}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  pl={2}
                  pr={1}
                >
                  <HistoryToggleOffOutlinedIcon />
                  <Typography noWrap>{playtime} мин</Typography>
                </Box>
              </Box>
              {!isJoin && !isPayingFullPrice && (
                <>
                  <Divider />
                  <Box my={2}>
                    <RadioGroup
                      name="select payment"
                      sx={{ gap: 2 }}
                      value={payFor}
                      onChange={(e) => setPayFor(e.target.value)}
                    >
                      <>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          gap={1}
                        >
                          <RadioLabel
                            value="0"
                            labelType={
                              ERadioLabelType.WITH_ICON_AND_DESCRIPTION
                            }
                            icon={<CreditCardOutlinedIcon />}
                            title="Оплатить свою часть"
                            description={`Если другие игроки не заплатят свою часть до ${paymentDeadline} - вы должны будете доплатить ${priceFor3} RUB`}
                          />
                          <Typography whiteSpace="nowrap">
                            {price / 4} RUB
                          </Typography>
                        </Box>
                        <Typography mt={1} ml={4} color="blue">
                          Добавить игроков
                        </Typography>
                      </>
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
              <Typography fontWeight={700}>Итог</Typography>
              <Typography color="gray" lineHeight={1.2}>
                Плата за услуги Sportytime и налоги включительно
              </Typography>
            </Box>
            <Typography color="blue" whiteSpace="nowrap" fontSize={20}>
              {isPayingFullPrice ? price : total} RUB
            </Typography>
          </Box>
        </Box>

        <Box py={1.5} px={2} borderTop="1px solid #ddd">
          <Button
            onClick={() => handleCheckout(isPayingFullPrice ? price : total)}
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
            {/* Продолжить оплату */}
            Забронировать корт
          </Button>
        </Box>
      </>
    </ModalContainer>
  );
};
