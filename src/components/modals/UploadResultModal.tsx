import { IonContent, IonModal, isPlatform } from '@ionic/react';
import { Box, Modal, Typography } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Button } from '../atoms/Button';

interface IUploadResultModalProps {
  openState: boolean;
  handleModal: any;
}

let currentMyTeamScore = 0;

export function UploadResultModal({
  openState,
  handleModal,
}: IUploadResultModalProps) {
  const [matchResult, setMatchResult] = useState<string[]>(
    new Array(6).fill(''),
  );

  const [results] = [
    [{ a: matchResult[0], b: matchResult[3] }],
    [{ a: matchResult[1], b: matchResult[4] }],
    [{ a: matchResult[2], b: matchResult[5] }],
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

    const newMatchResult: string[] = [...matchResult];
    newMatchResult[currentMyTeamScore] = value.substring(value.length - 1);
    setMatchResult(newMatchResult);
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

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeMyTeamIndex]);

  const renderContnet = () => {
    return (
      <Box
        sx={{
          width: '100%',
          maxWidth: '400px',
          background: '#fff',
          borderRadius: '15px',
          padding: '20px 10px',
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: '1rem', fontWeight: '600', paddingBottom: '.5rem' }}
          >
            Добавить результаты
          </Typography>
          <Typography>
            После добавления результата другая команда должна подтвердить или
            изменить его, иначе он будет автоматически утвержден через 24 часа.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '1rem',
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
            <Typography>Set-1</Typography>
            <Typography>Set-2</Typography>
            <Typography>Set-3</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            {matchResult.slice(1, 4).map((_, index) => (
              <input
                style={{
                  textAlign: 'center',
                  width: '50px',
                  height: '60px',
                  background: '#F5F7F6',
                  borderRadius: '10px',
                  outline: 'none',

                  border: 'none',
                }}
                placeholder="-"
                key={index}
                value={matchResult[index]}
                ref={index === activeMyTeamIndex ? inputRef : null}
                type="tel"
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                onChange={handleOnChange}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: '10px' }}>
            {matchResult.slice(3).map((_, index) => {
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

                    border: 'none',
                  }}
                  placeholder="-"
                  key={index}
                  value={matchResult[newIndex]}
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
            }}
          >
            Отправить
          </Button>
        </Box>
      </Box>
    );
  };

  if (isPlatform('mobile')) {
    return (
      <IonModal
        isOpen={openState}
        onWillDismiss={handleModal}
        mode="ios"
        initialBreakpoint={0.52}
        breakpoints={[0, 0.52]}
      >
        <IonContent>{renderContnet()}</IonContent>
      </IonModal>
    );
  } else {
    return (
      <Modal open={openState} onClose={handleModal}>
        {renderContnet()}
      </Modal>
    );
  }
}