import React, { useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  RadioGroup,
  Typography,
} from '@mui/material';
import { RadioLabel } from '../molecules/RadioLabel';
import { ERadioLabelType } from '../../types';
import { countMatchEndTime } from '../../helpers/countMatchEndTime';

const dateOptions: any = { weekday: 'long', day: 'numeric', month: 'short' };

interface ICheckoutModal {
  courtData?: any;
  openState: boolean;
  handleModal: (val?: boolean) => void;
  handleCheckout: any;
}

export const CheckoutModal: React.FC<ICheckoutModal> = ({
  courtData,
  openState,
  handleModal,
  handleCheckout,
}) => {
  if (!courtData) return;
  const [payFor, setPayFor] = useState('0');

  const total =
    courtData && payFor === '0' ? courtData.price / 4 : courtData.price;
  const courtTags = courtData && courtData.tags?.map((tag: any) => tag.title);

  return (
    <IonModal
      onDidDismiss={() => handleModal(false)}
      isOpen={openState}
      initialBreakpoint={0.95}
      breakpoints={[0, 0.25, 0.5, 0.75, 0.95]}
      handleBehavior="cycle"
    >
      <IonHeader>
        <IonToolbar style={{ borderBottom: '1px solid #ddd' }}>
          <IonTitle>Оплата</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => handleModal()}>
              <CloseRoundedIcon sx={{ color: 'black' }} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <>
        <IonContent className="ion-padding">
          <Box display="flex" flexDirection="column" gap={4} mb={4}>
            {courtData && (
              <Box border="1px solid #ddd" borderRadius={2} py={1} px={2}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  py={1}
                  borderBottom="1px solid #ddd"
                >
                  <Box flexGrow={1} borderRight="1px solid #ddd" pr={1}>
                    <Typography textTransform="capitalize">
                      {courtData.date.toLocaleDateString('ru-RU', dateOptions)}{' '}
                      {courtData.startTime} -{' '}
                      {countMatchEndTime(
                        courtData.startTime,
                        courtData.playtime,
                      )}
                    </Typography>
                    <Box display="flex" gap={0.5}>
                      <Typography textTransform="lowercase">
                        {courtData?.sport},
                      </Typography>
                      <Typography>{courtData.courtName}</Typography>
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
                    <Typography whiteSpace="nowrap">
                      {courtData.playtime} мин
                    </Typography>
                  </Box>
                </Box>
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
                          labelType={ERadioLabelType.WITH_ICON_AND_DESCRIPTION}
                          icon={<CreditCardOutlinedIcon />}
                          title="Оплатить свою часть"
                          description="Если другие игроки не заплатят до *дата и время  конца матча + 2 часа* - вы должны будете должны доплатить *сумма за 3их*"
                        />
                        <Typography whiteSpace="nowrap">
                          {courtData.price / 4} RUB
                        </Typography>
                      </Box>
                      <Typography mt={1} ml={4} color="blue">
                        Добавить игроков
                      </Typography>
                    </>
                    <Box display="flex" justifyContent="space-between" gap={1}>
                      <RadioLabel
                        value="1"
                        labelType={ERadioLabelType.WITH_ICON_AND_DESCRIPTION}
                        icon={<CreditCardOutlinedIcon />}
                        title="Оплатить полностью"
                      />
                      <Typography whiteSpace="nowrap">
                        {courtData.price} RUB
                      </Typography>
                    </Box>
                  </RadioGroup>
                </Box>
              </Box>
            )}
            <Box display="flex" alignItems="center" gap={2}>
              <Box>
                <Typography fontWeight={700}>Итог</Typography>
                <Typography color="gray" lineHeight={1.2}>
                  Плата за услуги Playtomic и налоги включительно
                </Typography>
              </Box>
              <Typography color="blue" whiteSpace="nowrap" fontSize={20}>
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
        </IonContent>
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
    </IonModal>
  );
};
