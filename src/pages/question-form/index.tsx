import { useSearchParam } from '../../hooks/useSearchParams';
import { QuestionsStepStep } from './steps/QuestionsStep';
import { ChooseYourSport } from './steps/ChooseYourSport';
import { LevelingStep } from './steps/LevelingStep';
import { ResultsStep } from './steps/Results';

export function QuestionFormPage() {
  const [step, setStep] = useSearchParam('step', '1');
  const currentStep = Number(step);

  const handleStep = (step: number) => setStep(`${currentStep + step}`);

  return (
    <>
      {currentStep === 1 && <ChooseYourSport handleStep={handleStep} />}
      {currentStep === 2 && <LevelingStep handleStep={handleStep} />}
      {currentStep === 3 && <QuestionsStepStep handleStep={handleStep} />}
      {currentStep === 4 && <ResultsStep />}
    </>
  );
}

export default QuestionFormPage;
