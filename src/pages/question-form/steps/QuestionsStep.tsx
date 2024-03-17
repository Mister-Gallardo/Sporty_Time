import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ELeveling, IOption, IQuestion, leveling } from '../questions';
import { Box, Button, Input, RadioGroup, Typography } from '@mui/material';
import {
  ERadioLabelType,
  RadioLabel,
} from '../../../components/molecules/RadioLabel';
import { QuestionTitle } from '../components/QuestionTitle';
import { isPlatform, useIonToast } from '@ionic/react';
import { useMutation } from '@tanstack/react-query';
import { createSportRating } from '../../../services/rating';
import { QuestionsContainer } from '../components/QuestionsContainer';
import { useSearchParam } from '../../../hooks/useSearchParams';
import { useHistory } from 'react-router';
import { ESport } from '../../../services/matches/interface';
import { getSportAndLevel } from '../../../helpers/getSportAndLevelIndx';

interface QuestionsStepStepProps {
  handleStep: (step: number) => void;
}
const isMobile = isPlatform('mobile');

export function QuestionsStepStep({ handleStep }: QuestionsStepStepProps) {
  const [isPrev] = useSearchParam('prev');
  const history = useHistory();

  const [sport] = useSearchParam('sport', ESport.PADEL);
  const [level] = useSearchParam('level', ELeveling.NONE);

  const getQuestionsByLvlAndSport = () => {
    if (!sport || !level) return null;

    const selectedLevel = leveling.find((item) => item.id === level);
    const questions = (selectedLevel?.availableFor as any)[sport.toLowerCase()];

    return questions;
  };

  const allQuestions = useMemo(getQuestionsByLvlAndSport, [sport, level]);

  const [currentQuestions, setCurrentQuestions] = useState<IQuestion[]>([]);
  const [isLastQuestion, setIsLastQuestion] = useState<boolean>(false);

  useEffect(() => {
    if (allQuestions) setCurrentQuestions([allQuestions.gender]);
  }, []);
  const { setValue, getValues, register, unregister } = useForm();

  const handleRadioGroupChange = (
    question: string,
    questionID: string,
    isAnswerMatter: boolean,
  ) => {
    const { answer, next, i }: IOption = JSON.parse(question);

    if (!next) return setIsLastQuestion(true);
    const isExist = getValues(questionID);

    if (isExist === undefined) {
      setCurrentQuestions((prev) => [...prev, allQuestions[next]]);
    }

    // if answer was already selected and it affects on the next question - remove all questions after it
    if (isExist && isAnswerMatter) {
      const curQuestionIdx = currentQuestions.findIndex(
        (item) => item.id === questionID,
      );

      setCurrentQuestions((prev) => [
        ...prev.slice(0, curQuestionIdx + 1),
        allQuestions[next],
      ]);

      const removeQuestions = currentQuestions.slice(curQuestionIdx + 1);
      removeQuestions.map((q) => unregister(q.id));
    }
    setValue(questionID, { answer, i });
  };

  // scroll to bottom when new question appears
  const questionsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentQuestions.length > 2) {
      questionsEndRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [currentQuestions.length]);

  const [showToast] = useIonToast();

  const createRatingMutation = useMutation({
    mutationFn: createSportRating,
    onSuccess() {
      if (isPrev === 'filter') return history.push('/matches?q=2');
      if (isPrev === 'match') return history.goBack();
      handleStep(1);
    },
    onError() {
      showToast({
        color: 'danger',
        message: `Произошла ошибка, попробуйте ещё раз`,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
  });

  const onApplyResults = () => {
    const { sportIndex, levelIndex } = getSportAndLevel(sport, level);

    const data = getValues();
    const answerI: any = {};

    for (const key in data) {
      answerI[key] = data[key].i;
    }

    createRatingMutation.mutate({
      ...answerI,
      sport: sportIndex,
      level: levelIndex,
    });
  };

  if (!allQuestions) {
    return (
      <Box marginTop={5}>
        <Typography
          textAlign="center"
          marginBottom={2}
          fontSize={20}
          fontWeight={500}
        >
          Что-то пошло не так, вернуться на стартовую страницу
        </Typography>
        <Button onClick={() => handleStep(-2)} variant="contained">
          Вернуться
        </Button>
      </Box>
    );
  }

  return (
    <QuestionsContainer>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="80vh"
        overflow="scroll"
      >
        <Box>
          <Typography color="GrayText" mb={2}>
            Эти вопросы помогут определить Ваш уровень Sportytime.
          </Typography>
          {currentQuestions.length > 0 &&
            currentQuestions.map((questionBlock) => {
              return (
                <React.Fragment key={questionBlock.id}>
                  {questionBlock.isInput ? (
                    <Box>
                      <QuestionTitle title={questionBlock.question} />
                      <Input
                        {...register(questionBlock.id)}
                        placeholder="Type here..."
                        fullWidth
                      />
                    </Box>
                  ) : (
                    <Box marginBottom={1.8}>
                      <QuestionTitle title={questionBlock.question} />
                      <RadioGroup
                        onChange={(e) =>
                          handleRadioGroupChange(
                            e.target.value,
                            questionBlock.id,
                            questionBlock.isMatter,
                          )
                        }
                        sx={{ gap: 0.7 }}
                      >
                        {questionBlock.options?.map((option, i) => {
                          return (
                            <RadioLabel
                              key={option.answer}
                              value={JSON.stringify({ ...option, i })}
                              labelType={ERadioLabelType.TITLE_ONLY}
                              title={option.answer}
                            />
                          );
                        })}
                      </RadioGroup>
                    </Box>
                  )}
                </React.Fragment>
              );
            })}
        </Box>

        <Box ref={questionsEndRef} marginTop={10} />
      </Box>

      <Box
        position="fixed"
        bottom={0}
        display="flex"
        justifyContent="center"
        left={16}
        right={16}
        bgcolor="white"
        paddingY={1.25}
      >
        <Button
          onClick={onApplyResults}
          variant="contained"
          sx={{ fontSize: 18, borderRadius: 20, px: isMobile ? 'unset' : 10 }}
          disabled={!isLastQuestion}
          fullWidth={isMobile}
        >
          Подтвердить
        </Button>
      </Box>
    </QuestionsContainer>
  );
}
