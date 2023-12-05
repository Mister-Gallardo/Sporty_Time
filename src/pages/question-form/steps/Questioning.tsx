import { IonHeader, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { Button } from '../../../components/atoms/Button';
import { ArrowBackIosNewOutlined, InfoRounded } from '@mui/icons-material';
import { Box, Fade, Radio, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createSportRating } from '../../../services/rating';
import { useEffect, useState } from 'react';
import { questionsArray } from './questions';

interface QuestioningStepProps {
  handleBackStep: () => void;
  handleNextStep: () => void;
}

export function QuestioningStep({
  handleBackStep,
  handleNextStep,
}: QuestioningStepProps) {
  const [createRatingData, setCreateRatingData] = useState<any>();

  const form = useForm({
    defaultValues: {
      level: '',
      gender: '',
      age: '',
      experience: '',
      countMatches: '',
      lessons: '',
      fitness: '',
    },
  });

  const { register, watch } = form;

  const questioningData = form.getValues();

  useEffect(() => {
    setCreateRatingData({
      level: Number(questioningData.level),
      gender: Number(questioningData.gender),
      age: Number(questioningData.age),
      experience: Number(questioningData.experience),
      countMatches: Number(questioningData.countMatches),
      lessons: Number(questioningData.lessons),
      fitness: Number(questioningData.fitness),
      sport: Number(localStorage.getItem('sport')),
    });
  }, [watch('fitness')]);

  const createRatingMutation = useMutation({
    mutationFn: createSportRating,
    onSuccess() {
      handleNextStep();
    },
    onError(e) {
      console.log(e);
    },
  });

  return (
    <>
      {isPlatform('mobile') && (
        <IonHeader style={{ border: 'none' }}>
          <IonToolbar style={{ paddingTop: '15px', borderTop: 'none' }}>
            <IonTitle>Вернуться в начало</IonTitle>
            <Button
              onClick={() => handleBackStep()}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '40px',
                background: 'transparent',
              }}
            >
              <ArrowBackIosNewOutlined sx={{ color: '#000', opacity: '.7' }} />
            </Button>
          </IonToolbar>
        </IonHeader>
      )}

      <Fade in>
        <Box
          sx={{
            marginBottom: '5rem',
            paddingInline: '20px',
          }}
        >
          <Fade in>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>
                {questionsArray[0].question}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: '15px',
                  background: '#EEF0FF',
                  border: '1px solid #E7EEFA',
                  borderRadius: '12px',
                  padding: '15px',
                  marginBlock: '1rem',
                }}
              >
                <InfoRounded sx={{ color: '#7190FF' }} />
                <Typography>
                  Не переоценивайте себя! Для того чтобы повысить точность
                  выравнивания и найти свою идеальную пару, вы должны отвечать
                  правдиво.
                </Typography>
              </Box>

              {questionsArray[0].answers.map((answer, index) => (
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('level') === String(index)}
                    {...register('level')}
                    value={String(index)}
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    {answer}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Fade>

          {watch('level') !== '' && watch('level') && (
            <Fade in>
              <Box
                sx={{
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>
                  {questionsArray[1].question}
                </Typography>
                {questionsArray[1].answers.map((answer, index) => (
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '.5rem',
                      alignItems: 'center',
                    }}
                  >
                    <Radio
                      checked={watch('gender') === String(index)}
                      {...register('gender')}
                      value={String(index)}
                    />
                    <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                      {answer}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Fade>
          )}

          {watch('gender') !== '' && watch('gender') && (
            <Fade in>
              <Box
                sx={{
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>
                  {questionsArray[2].question}
                </Typography>
                {questionsArray[2].answers.map((answer, index) => (
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '.5rem',
                      alignItems: 'center',
                    }}
                  >
                    <Radio
                      checked={watch('age') === String(index)}
                      {...register('age')}
                      value={String(index)}
                    />
                    <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                      {answer}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Fade>
          )}

          {watch('age') !== '' && watch('age') && (
            <Fade in>
              <Box
                sx={{
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>
                  {questionsArray[3].question}
                </Typography>
                {questionsArray[3].answers.map((answer, index) => (
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '.5rem',
                      alignItems: 'center',
                    }}
                  >
                    <Radio
                      checked={watch('experience') === String(index)}
                      {...register('experience')}
                      value={String(index)}
                    />
                    <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                      {answer}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Fade>
          )}

          {watch('experience') !== '' && watch('experience') && (
            <Fade in>
              <Box
                sx={{
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>
                  {questionsArray[4].question}
                </Typography>
                {questionsArray[4].answers.map((answer, index) => (
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '.5rem',
                      alignItems: 'center',
                    }}
                  >
                    <Radio
                      checked={watch('countMatches') === String(index)}
                      {...register('countMatches')}
                      value={String(index)}
                    />
                    <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                      {answer}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Fade>
          )}

          {watch('countMatches') !== '' && watch('countMatches') && (
            <Fade in>
              <Box
                sx={{
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>
                  {questionsArray[5].question}
                </Typography>
                {questionsArray[5].answers.map((answer, index) => (
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '.5rem',
                      alignItems: 'center',
                    }}
                  >
                    <Radio
                      checked={watch('lessons') === String(index)}
                      {...register('lessons')}
                      value={String(index)}
                    />
                    <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                      {answer}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Fade>
          )}

          {watch('lessons') !== '' && watch('lessons') && (
            <Fade in>
              <Box
                sx={{
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>
                  {questionsArray[6].question}
                </Typography>
                {questionsArray[6].answers.map((answer, index) => (
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '.5rem',
                      alignItems: 'center',
                    }}
                  >
                    <Radio
                      checked={watch('fitness') === String(index)}
                      {...register('fitness')}
                      value={String(index)}
                    />
                    <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                      {answer}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Fade>
          )}

          <Button
            disabled={
              watch('fitness') !== '' && watch('fitness') ? false : true
            }
            onClick={() => {
              createRatingMutation.mutate(createRatingData);
            }}
            sx={{
              fontSize: '1.1rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              maxWidth: isPlatform('mobile') ? '90%' : '400px',

              height: '40px',
              position: 'fixed',
              bottom: '1.5rem',
            }}
          >
            Подтвердить
          </Button>
        </Box>
      </Fade>
    </>
  );
}
