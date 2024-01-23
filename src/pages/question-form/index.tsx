import useSearchParams from '../../hooks/useSearchParams';
import { QuestionsStepStep } from './steps/QuestionsStep';
import { ChooseYourSport } from './steps/ChooseYourSport';
import { LevelingStep } from './steps/LevelingStep';
import { ResultsStep } from './steps/Results';

export function QuestionFormPage() {
  const [getIndex, setIndex] = useSearchParams();
  const currentStep = getIndex('step') ? +getIndex('step')! : 1;

  const handleStep = (step: number) =>
    setIndex('step', `${currentStep + step}`);

  return (
    <>
      {currentStep === 1 && <ChooseYourSport handleStep={handleStep} />}
      {currentStep === 2 && <LevelingStep handleStep={handleStep} />}
      {currentStep === 3 && <QuestionsStepStep handleStep={handleStep} />}
      {currentStep === 4 && <ResultsStep />}
    </>
  );
}
