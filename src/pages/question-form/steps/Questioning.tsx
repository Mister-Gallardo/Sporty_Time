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
    },
  });

  const { register, getValues, watch } = form;
  setTimeout(() => {
    console.log(form.getValues());
  }, 2000);

  const levelQuestionValue = getValues().levelQuestion;

  const { handleBackStep, handleNextStep } = props;
  const watchValues = watch(['levelQuestion', 'genderQuestion']);
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
            marginTop: isPlatform('mobile') ? '0' : '4rem',
            height: '100%',
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
                checked={levelQuestionValue === 'intermediate'}
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
                checked={levelQuestionValue === 'intermediate-high'}
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
                checked={levelQuestionValue === 'advanced'}
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
                checked={levelQuestionValue === 'competition'}
                {...register('levelQuestion')}
                value="competition"
              />
              <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                Competition
              </Typography>
            </Box>
          </Box>
          {levelQuestionValue !== '' && levelQuestionValue && (
            <Box
              sx={{
                paddingTop: '1rem',
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
                  gap: '.5rem',
                  alignItems: 'center',
                }}
              >
                <Radio
                  checked={levelQuestionValue === 'beginner'}
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
                  checked={levelQuestionValue === 'intermediate'}
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
                  checked={levelQuestionValue === 'intermediate-high'}
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
                  checked={levelQuestionValue === 'advanced'}
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
                  checked={levelQuestionValue === 'competition'}
                  {...register('levelQuestion')}
                  value="competition"
                />
                <Typography sx={{ fontSize: '1.1rem', opacity: '.7' }}>
                  Competition
                </Typography>
              </Box>
            </Box>
          )}

          <Button
            onClick={() => handleNextStep()}
            sx={{
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              maxWidth: isPlatform('mobile') ? '90%' : '400px',

              height: '40px',
              position: 'absolute',
              bottom: '3rem',
            }}
          >
            Результаты
          </Button>
        </Box>
      </Fade>
    </>
  );
}
