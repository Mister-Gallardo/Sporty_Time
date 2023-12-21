import React, { useState } from 'react';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  RadioGroup,
  Typography,
} from '@mui/material';
import { RadioLabel } from '../molecules/RadioLabel';
import { ERadioLabelType, ITag } from '../../types';
import { countMatchEndTime } from '../../helpers/countMatchEndTime';
import { ModalContainer } from './ModalContainer';

const dateOptions: any = { weekday: 'long', day: 'numeric', month: 'short' };

interface MainCourtInfo {
  price: number;
  tags: ITag[] | [];
  date: string;
  startTime: string;
  playtime: number;
  sport: string;
  courtName: string;
}

interface ICheckoutModal {
  isJoin?: boolean;
  courtData?: MainCourtInfo;
  openState: boolean;
  handleModal: (val?: boolean) => void;
  handleCheckout: any;
}

export const CheckoutModal: React.FC<ICheckoutModal> = ({
  isJoin,
  courtData,
  openState,
  handleModal,
  handleCheckout,
}) => {
  // console.log(courtData)
  if (!courtData) return;

  const { price, tags, date, startTime, playtime, sport, courtName } =
    courtData;

  const [payFor, setPayFor] = useState('0');

  const matchDate = new Date(date);

  const total = payFor === '0' || isJoin ? price / 4 : price;
  const courtTags = tags.length > 0 ? tags.map((tag: any) => tag.title) : [];

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
                    {matchDate.toLocaleDateString('ru-RU', dateOptions)}{' '}
                    {startTime} - {countMatchEndTime(startTime, playtime)}
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
              {!isJoin && (
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
                            description="Если другие игроки не заплатят до *дата и время  конца матча + 2 часа* - вы должны будете должны доплатить *сумма за 3их*"
                          />
                          <Typography noWrap>{price / 4} RUB</Typography>
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
          <Box display="flex" alignItems="center" gap={2}>
            <Box>
              <Typography fontWeight={700}>Итог</Typography>
              <Typography color="gray" lineHeight={1.2}>
                Плата за услуги Sportytime и налоги включительно
              </Typography>
            </Box>
            <Typography color="blue" noWrap fontSize={20}>
              {total} RUB
            </Typography>
          </Box>
          <Box border="1px solid #ddd" borderRadius={2} py={2.5} px={2}>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <DescriptionOutlinedIcon />
              <Box>
                <Typography>Booking Cancellation Policy</Typography>
                <Typography color="red">
                  Valid up untill 24 hours before the booking*
                </Typography>
              </Box>
            </Box>
            <List>
              {[1, 2, 3, 4].map((item, i) => {
                return (
                  <ListItem
                    key={item}
                    alignItems="flex-start"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: 0,
                    }}
                  >
                    <ListItemText primary={item === 4 ? '-' : 'Title'} />
                    <ListItemText secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt id, doloribus tenetur" />
                  </ListItem>
                );
              })}
              <ListItem sx={{ padding: 0 }}>
                <ListItemText secondary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nulla natus, aspernatur expedita voluptate iusto. At impedit ea illo amet quam quae nesciunt vitae, velit vero exercitationem. Ducimus, adipisci aut?" />
              </ListItem>
            </List>
            <Button
              variant="outlined"
              sx={{ borderRadius: 10, paddingY: 0, fontSize: 12 }}
            >
              Read More
            </Button>
          </Box>
          <Box>
            <FormControlLabel
              label="Marketing communications from your favourite Clubs"
              control={<Checkbox />}
            />
            <Typography fontSize={12} color="gray" ml={4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              corrupti maiores quidem saepe animi, iste vitae sequi illo sint
              explicabo mollitia numquam deleniti at itaque ratione blanditiis
              fugit amet et?
            </Typography>
          </Box>
        </Box>

        <Box mb={5} py={1.5} px={2} borderTop="1px solid #ddd">
          <Button
            onClick={handleCheckout}
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
