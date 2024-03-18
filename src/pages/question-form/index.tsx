import React from 'react';
import { useSearchParam } from '../../hooks/useSearchParams';
import { QuestionsStep } from './steps/QuestionsStep';
import { ChooseYourSport } from './steps/ChooseYourSport';
import { LevelingStep } from './steps/LevelingStep';
import { ResultsStep } from './steps/Results';
import { useRegisterNotificationsToken } from '../../hooks/useRegisterNotificationsToken';

export function QuestionFormPage() {
  useRegisterNotificationsToken();

  const [step, setStep] = useSearchParam('step', '1');
  const currentStep = Number(step);

  const handleStep = (step: number) => setStep(`${currentStep + step}`);

  return (
    <>
      {currentStep === 1 && <ChooseYourSport handleStep={handleStep} />}
      {currentStep === 2 && <LevelingStep handleStep={handleStep} />}
      {currentStep === 3 && <QuestionsStep handleStep={handleStep} />}
      {currentStep === 4 && <ResultsStep />}
    </>
  );
}

export default QuestionFormPage;
