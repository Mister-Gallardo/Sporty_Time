import { IonHeader, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { Button } from '../../../components/atoms/Button';
import { ArrowBackIosNewOutlined, InfoRounded } from '@mui/icons-material';
import { Box, Fade, Radio, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createSportRating } from '../../../services/rating';
import { useEffect, useState } from 'react';

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
    onSuccess(data) {
      localStorage.setItem('userRating', JSON.stringify(data));
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
            marginTop: isPlatform('mobile') ? '0' : '4rem',
            paddingInline: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>
              На каком уровне по-вашему вы находитесь?
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
            <Box
              sx={{
                display: 'flex',
                gap: '.5rem',
                alignItems: 'center',
              }}
            >
              <Radio
                checked={watch('level') === '0'}
                {...register('level')}
                value="0"
              />
              <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                Beginner
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '.5rem',
                alignItems: 'center',
              }}
            >
              <Radio
                checked={watch('level') === '1'}
                {...register('level')}
                value="1"
              />
              <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                Intermediate
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '.5rem',
                alignItems: 'center',
              }}
            >
              <Radio
                checked={watch('level') === '2'}
                {...register('level')}
                value="2"
              />
              <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                Intermediate high
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '.5rem',
                alignItems: 'center',
              }}
            >
              <Radio
                checked={watch('level') === '3'}
                {...register('level')}
                value="3"
              />
              <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                Advanced
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '.5rem',
                alignItems: 'center',
              }}
            >
              <Radio
                checked={watch('level') === '4'}
                {...register('level')}
                value="4"
              />
              <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                Competition
              </Typography>
            </Box>
          </Box>
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
                  Вы женщина или мужчина?
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('gender') === '0'}
                    {...register('gender')}
                    value="0"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Мужчина
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('gender') === '1'}
                    {...register('gender')}
                    value="1"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Женщина
                  </Typography>
                </Box>
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
                  Сколько вам лет?
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('age') === '0'}
                    {...register('age')}
                    value="0"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    18-30
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('age') === '1'}
                    {...register('age')}
                    value="1"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    30-40
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('age') === '2'}
                    {...register('age')}
                    value="2"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    40-50
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('age') === '3'}
                    {...register('age')}
                    value="3"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Больше 50
                  </Typography>
                </Box>
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
                  Занимались ли вы в прошлом другими видами ракетного спорта?
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('experience') === '0'}
                    {...register('experience')}
                    value="0"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Нет, никогда
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('experience') === '1'}
                    {...register('experience')}
                    value="1"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Да, меньше двух лет
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('experience') === '2'}
                    {...register('experience')}
                    value="2"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Да, больше двух лет
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('experience') === '3'}
                    {...register('experience')}
                    value="3"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Да, больше пяти лет
                  </Typography>
                </Box>
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
                  Сколько матчей по паделю вы проводили в среднем в неделю за
                  последние 6 месяцев?
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('countMatches') === '0'}
                    {...register('countMatches')}
                    value="0"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    0
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('countMatches') === '1'}
                    {...register('countMatches')}
                    value="1"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    1
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('countMatches') === '2'}
                    {...register('countMatches')}
                    value="2"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    2
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('countMatches') === '3-or-more'}
                    {...register('countMatches')}
                    value="3"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    3 или больше
                  </Typography>
                </Box>
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
                  Получали ли вы уроки игры в падель за последний год? Сколько
                  уроков в неделю?
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('lessons') === '0'}
                    {...register('lessons')}
                    value="0"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Нет, никогда
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('lessons') === '1'}
                    {...register('lessons')}
                    value="1"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Да, один урок в неделю
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('lessons') === '2'}
                    {...register('lessons')}
                    value="2"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Да, два или три урока в неделю
                  </Typography>
                </Box>
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
                  Какой у вас уровень фитнесса?
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('fitness') === '0'}
                    {...register('fitness')}
                    value="0"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Отличный
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('fitness') === '1'}
                    {...register('fitness')}
                    value="1"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Хороший
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('fitness') === '2'}
                    {...register('fitness')}
                    value="2"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Средний
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Radio
                    checked={watch('fitness') === '3'}
                    {...register('fitness')}
                    value="3"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Очень низкий
                  </Typography>
                </Box>
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
