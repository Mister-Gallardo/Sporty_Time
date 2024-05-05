import React from 'react';
import { ModalContainer } from './ModalContainer';
import useToggle from '../../hooks/useToggle';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getClass, joinClass } from '../../services/classes';
import { useIonToast } from '@ionic/react';
import { useParams } from 'react-router';
import { renderCheckoutWidget } from '../../helpers/renderCheckoutWidget';
import { Box, Button, Divider, Typography } from '@mui/material';
import { getSportName } from '../../helpers/getNameOf';
import { EType, getDayFormat } from '../../helpers/getTimeDateString';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';

interface IClassJoinCheckoutModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}

export const ClassJoinCheckoutModal: React.FC<IClassJoinCheckoutModalProps> = ({
  openState,
  handleModal,
}) => {
  const { classId } = useParams<{ classId: string }>();

  const { data } = useQuery({
    queryKey: ['classes', classId],
    queryFn: () => getClass(classId),
    enabled: !!classId,
  });

  const classData = data?.data;

  const [isDisabled, setIsDisabled] = useToggle();

  const qc = useQueryClient();
  const [showToast] = useIonToast();

  const onSuccess = () => {
    handleModal(false);
    showToast({
      color: 'success',
      message: 'Вы присоединились к занятию!',
      mode: 'ios',
      position: 'top',
      duration: 2000,
    });
    qc.refetchQueries({ queryKey: [`classes`, +classId] });
    qc.refetchQueries({ queryKey: ['classes/my'] });
  };

  const joinClassMutation = useMutation({
    mutationFn: joinClass,
    onSuccess(token: string) {
      renderCheckoutWidget(token, onSuccess);
    },
    onError(e: any) {
      handleModal(false);
      setIsDisabled(false);

      const message = e?.response?.data?.message;
      if (!message) return;

      showToast({
        color: 'danger',
        message,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
  });

  if (!classData) return;

  const startTime = classData?.booking?.startsAt.split('T');

  const classDate = getDayFormat(
    classData?.booking?.startsAt,
    EType.WEEK_DAY_MONTH,
    startTime[1],
    classData?.booking?.duration,
  );
  const tags =
    classData?.booking?.court?.tags &&
    classData?.booking?.court?.tags.map((tag) => tag.title).join(' | ');

  return (
    <ModalContainer
      openState={openState}
      handleModal={(val) => {
        setIsDisabled(false);
        handleModal(val);
      }}
      headerTitle="Оплата"
    >
      <Box display="flex" justifyContent="space-between" py={1}>
        <Box flexGrow={1} pr={1}>
          <Typography textTransform="capitalize">{classDate}</Typography>
          <Typography>
            {getSportName(classData.sport)}, {classData?.booking?.court?.title}
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
          <Typography noWrap>{classData?.booking?.duration} мин</Typography>
        </Box>
      </Box>
      <Divider flexItem variant="middle" sx={{ my: 2 }} />
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
          {classData?.price} RUB
        </Typography>
      </Box>
      <Box mt={4} display="flex" justifyContent="center">
        <Button
          onClick={() => joinClassMutation.mutate(classId)}
          variant="contained"
          sx={{ px: 2 }}
        >
          Оплатить
        </Button>
      </Box>

      <Box
        mt={2}
        id="payment-form"
        minHeight={isDisabled ? 550 : 'unset'}
        position="relative"
        zIndex={2}
      />
    </ModalContainer>
  );
};
