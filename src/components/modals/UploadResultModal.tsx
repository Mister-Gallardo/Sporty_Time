import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { getMyMatches, uploadResults } from '../../services/matches/service';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ModalContainer } from './ModalContainer';
import { useIonToast } from '@ionic/react';

interface IUploadResultModalProps {
  matchId?: number;
  openState: boolean;
  handleModal: any;
}

let currentMyTeamScore = 0;

export function UploadResultModal({
  openState,
  handleModal,
  matchId,
}: IUploadResultModalProps) {
  const qc = useQueryClient();
  const [matchResultFields, setMatchResultFields] = useState<string[]>(
    new Array(6).fill(''),
  );

  const matchResults = [
    [Number(matchResultFields[0]), Number(matchResultFields[3])],
    [Number(matchResultFields[1]), Number(matchResultFields[4])],
    [Number(matchResultFields[2]), Number(matchResultFields[5])],
  ];

  const [activeMyTeamIndex, setActiveMyTeamIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { value } = target;

    if (!value) {
      setActiveMyTeamIndex(currentMyTeamScore - 1);
    } else {
      if (activeMyTeamIndex === 3) {
        setActiveMyTeamIndex(1);
      } else if (activeMyTeamIndex === 0) {
        setActiveMyTeamIndex(3);
      } else if (activeMyTeamIndex === 1) {
        setActiveMyTeamIndex(4);
      } else if (activeMyTeamIndex === 4) {
        setActiveMyTeamIndex(2);
      } else if (activeMyTeamIndex === 2) {
        setActiveMyTeamIndex(5);
      }
    }

    const newMatchResult: string[] = [...matchResultFields];
    newMatchResult[currentMyTeamScore] = value.substring(value.length - 1);
    setMatchResultFields(newMatchResult);
  };

  const handleOnKeyDown = (
    { key }: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    currentMyTeamScore = index;
    if (activeMyTeamIndex < 0) {
      setActiveMyTeamIndex(0);
    }
    if (key === 'Backspace') setActiveMyTeamIndex(index - 1);
  };

  const [showToast] = useIonToast();

  const uploadMatchReslultsMutation = useMutation({
    mutationFn: uploadResults,
    onSuccess() {
      handleModal();
      qc.resetQueries({ queryKey: ['match', matchId] });
      qc.resetQueries({ queryKey: ['my-matches', false] });
      () => getMyMatches();
    },
    onError(e: any) {
      const message = e?.response?.data?.message;
      showToast({
        message,
        color: 'danger',
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
      setMatchResultFields(new Array(6).fill(''));
      handleModal();
    },
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeMyTeamIndex]);

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Добавить результаты"
    >
      <Box>
        <Typography mt={-1} lineHeight={1.3} textAlign="center" color="gray">
          После добавления результата другая команда должна подтвердить или
          изменить его, иначе он будет автоматически утвержден через 24 часа.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 1.5,
            marginTop: '1.25rem',
            marginRight: '1rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              width: '100%',
              maxWidth: '160px',
              justifyContent: 'space-between',
            }}
          >
            <Typography>Сет-1</Typography>
            <Typography>Сет-2</Typography>
            <Typography>Сет-3</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1.5}>
            <Typography fontSize={18} color="gray" mr={2}>
              Команда А
            </Typography>
            {matchResultFields.slice(1, 4).map((_, index) => (
              <input
                style={{
                  textAlign: 'center',
                  width: '50px',
                  height: '60px',
                  background: '#F5F7F6',
                  borderRadius: '10px',
                  outline: 'none',
                  color: '#111',
                  border: 'none',
                }}
                placeholder="-"
                key={index}
                value={matchResultFields[index]}
                ref={index === activeMyTeamIndex ? inputRef : null}
                type="tel"
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                onChange={handleOnChange}
              />
            ))}
          </Box>

          <Box display="flex" alignItems="center" gap={1.5}>
            <Typography fontSize={18} color="gray" mr={2}>
              Команда B
            </Typography>
            {matchResultFields.slice(3).map((_, index) => {
              const newIndex = index + 3;
              return (
                <input
                  style={{
                    textAlign: 'center',
                    width: '50px',
                    height: '60px',
                    background: '#F5F7F6',
                    borderRadius: '10px',
                    outline: 'none',
                    color: '#111',
                    border: 'none',
                  }}
                  placeholder="-"
                  key={index}
                  value={matchResultFields[newIndex]}
                  ref={newIndex === activeMyTeamIndex ? inputRef : null}
                  type="tel"
                  onKeyDown={(e) => handleOnKeyDown(e, newIndex)}
                  onChange={handleOnChange}
                />
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={() => {
              if (!matchId) return;
              uploadMatchReslultsMutation.mutate({
                matchId: Number(matchId),
                matchResults,
              });
            }}
            sx={{
              marginTop: '3rem',
              height: '45px',
              background: '#0D2432',
              borderRadius: '25px',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: '500',
              maxWidth: '350px',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
              '&:hover': {
                background: '#0D2432',
              },
            }}
            fullWidth
          >
            {uploadMatchReslultsMutation.isPending ? (
              <CircularProgress />
            ) : (
              'Отправить'
            )}
          </Button>
        </Box>
      </Box>
    </ModalContainer>
  );
}
