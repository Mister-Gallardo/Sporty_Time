import React, { useState } from 'react';
import { ModalContainer } from './ModalContainer';
import {
  Box,
  Button,
  Rating,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

export enum EFeedbackType {
  CLUB = 'CLUB',
  TRAINER = 'TRAINER',
}

interface IFeedbackFormModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  type: EFeedbackType;
  onSubmit: (comment: string, rating: number) => void;
}

export const FeedbackFormModal: React.FC<IFeedbackFormModalProps> = ({
  openState,
  handleModal,
  type,
  onSubmit,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Оставить отзыв"
    >
      <>
        <Typography
          mb={4}
          textAlign="center"
          fontWeight={600}
          fontSize={17}
          lineHeight={1.3}
        >
          Поделитесь своими впечатленияими
          {type === EFeedbackType.CLUB
            ? ' от игры в этом клубе'
            : type === EFeedbackType.TRAINER
            ? ' от занятий с этим тренером'
            : ''}
        </Typography>

        <Stack spacing={0.5} mb={2}>
          <Typography fontWeight={500} fontSize={16}>
            Оценка
          </Typography>
          <Rating
            name="set-rating"
            value={rating}
            onChange={(_, newValue) => {
              setRating(newValue as number);
            }}
            size="large"
            sx={{ color: 'primary.main' }}
          />
        </Stack>

        <Stack spacing={1}>
          <Typography fontWeight={500} fontSize={16}>
            Комментарий{' '}
            <span style={{ fontSize: 12, color: 'gray' }}>
              (минимум 5 символов)
            </span>
          </Typography>
          <Box position="relative">
            <TextField
              value={comment}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length > 500) return;
                setComment(value);
              }}
              autoComplete="off"
              variant="outlined"
              placeholder="Написать..."
              multiline
              rows={4}
              fullWidth
            />
            <Box display="flex" position="absolute" bottom={5} right={10}>
              <Typography
                fontSize={12}
                color={comment?.length < 5 ? 'error' : '#777'}
              >
                {comment?.length}
              </Typography>
              <Typography fontSize={12} color="#777">
                /500
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Button
          disabled={!rating || !comment.trim() || comment.length < 5}
          onClick={() => {
            onSubmit(comment, rating);
            setRating(0);
            setComment('');
          }}
          variant="contained"
          sx={{ mt: 5 }}
          fullWidth
        >
          Оставить отзыв
        </Button>
      </>
    </ModalContainer>
  );
};
