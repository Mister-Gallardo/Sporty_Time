import { IonHeader, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { Button } from '../../../components/atoms/Button';
import { ArrowBackIosNewOutlined, InfoRounded } from '@mui/icons-material';
import { Box, Fade, Radio, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

interface QuestioningStepProps {
  handleBackStep: () => void;
  handleNextStep: () => void;
}

export function QuestioningStep(props: QuestioningStepProps) {
  const form = useForm({
    defaultValues: {
      levelQuestion: '',
      genderQuestion: '',
      ageQuestion: '',
      otherSportsQuestion: '',
      amountOfMatchesQestion: '',
      sportLessonsQuestion: '',
      fitnessLevelQuestion: '',
    },
  });

  const { register, watch } = form;
  setTimeout(() => {
    console.log(form.getValues());
  }, 2000);

  const { handleBackStep, handleNextStep } = props;

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
                checked={watch('levelQuestion') === 'beginner'}
                {...register('levelQuestion')}
                value="beginner"
                id="beginner"
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
                checked={watch('levelQuestion') === 'intermediate'}
                {...register('levelQuestion')}
                value="intermediate"
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
                checked={watch('levelQuestion') === 'intermediate-high'}
                {...register('levelQuestion')}
                value="intermediate-high"
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
                checked={watch('levelQuestion') === 'advanced'}
                {...register('levelQuestion')}
                value="advanced"
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
                checked={watch('levelQuestion') === 'competition'}
                {...register('levelQuestion')}
                value="competition"
              />
              <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                Competition
              </Typography>
            </Box>
          </Box>
          {watch('levelQuestion') !== '' && watch('levelQuestion') && (
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
                    checked={watch('genderQuestion') === 'male'}
                    {...register('genderQuestion')}
                    value="male"
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
                    checked={watch('genderQuestion') === 'female'}
                    {...register('genderQuestion')}
                    value="female"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Женщина
                  </Typography>
                </Box>
              </Box>
            </Fade>
          )}

          {watch('genderQuestion') !== '' && watch('genderQuestion') && (
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
                    checked={watch('ageQuestion') === '18-30'}
                    {...register('ageQuestion')}
                    value="18-30"
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
                    checked={watch('ageQuestion') === '30-40'}
                    {...register('ageQuestion')}
                    value="30-40"
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
                    checked={watch('ageQuestion') === '40-50'}
                    {...register('ageQuestion')}
                    value="40-50"
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
                    checked={watch('ageQuestion') === 'over-50'}
                    {...register('ageQuestion')}
                    value="over-50"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Больше 50
                  </Typography>
                </Box>
              </Box>
            </Fade>
          )}

          {watch('ageQuestion') !== '' && watch('ageQuestion') && (
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
                    checked={watch('otherSportsQuestion') === 'never'}
                    {...register('otherSportsQuestion')}
                    value="never"
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
                    checked={
                      watch('otherSportsQuestion') === 'less-than-two-years'
                    }
                    {...register('otherSportsQuestion')}
                    value="less-than-two-years"
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
                    checked={
                      watch('otherSportsQuestion') === 'more-than-two-years'
                    }
                    {...register('otherSportsQuestion')}
                    value="more-than-two-years"
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
                    checked={
                      watch('otherSportsQuestion') === 'more-than-five-years'
                    }
                    {...register('otherSportsQuestion')}
                    value="more-than-five-years"
                  />
                  <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                    Да, больше пяти лет
                  </Typography>
                </Box>
              </Box>
            </Fade>
          )}

          {watch('otherSportsQuestion') !== '' &&
            watch('otherSportsQuestion') && (
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
                      checked={watch('amountOfMatchesQestion') === '0'}
                      {...register('amountOfMatchesQestion')}
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
                      checked={watch('amountOfMatchesQestion') === '1'}
                      {...register('amountOfMatchesQestion')}
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
                      checked={watch('amountOfMatchesQestion') === '2'}
                      {...register('amountOfMatchesQestion')}
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
                      checked={watch('amountOfMatchesQestion') === '3-or-more'}
                      {...register('amountOfMatchesQestion')}
                      value="3-or-more"
                    />
                    <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                      3 или больше
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            )}

          {watch('amountOfMatchesQestion') !== '' &&
            watch('amountOfMatchesQestion') && (
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
                      checked={watch('sportLessonsQuestion') === 'never'}
                      {...register('sportLessonsQuestion')}
                      value="never"
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
                      checked={watch('sportLessonsQuestion') === 'one-lesson'}
                      {...register('sportLessonsQuestion')}
                      value="one-lesson"
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
                      checked={
                        watch('sportLessonsQuestion') === 'two-or-three-lessons'
                      }
                      {...register('sportLessonsQuestion')}
                      value="two-or-three-lessons"
                    />
                    <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                      Да, два или три урока в неделю
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            )}

          {watch('sportLessonsQuestion') !== '' &&
            watch('sportLessonsQuestion') && (
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
                      checked={watch('fitnessLevelQuestion') === 'excellent'}
                      {...register('fitnessLevelQuestion')}
                      value="excellent"
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
                      checked={watch('fitnessLevelQuestion') === 'good'}
                      {...register('fitnessLevelQuestion')}
                      value="good"
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
                      checked={watch('fitnessLevelQuestion') === 'normal'}
                      {...register('fitnessLevelQuestion')}
                      value="normal"
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
                      checked={watch('fitnessLevelQuestion') === 'low'}
                      {...register('fitnessLevelQuestion')}
                      value="low"
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
              watch('fitnessLevelQuestion') !== '' &&
              watch('fitnessLevelQuestion')
                ? false
                : true
            }
            onClick={() => handleNextStep()}
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
