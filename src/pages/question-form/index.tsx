import { useSearchParam } from '../../hooks/useSearchParams';
import { QuestionsStepStep } from './steps/QuestionsStep';
import { ChooseYourSport } from './steps/ChooseYourSport';
import { LevelingStep } from './steps/LevelingStep';
import { ResultsStep } from './steps/Results';
import { useCallback, useEffect } from 'react';
import {
  FirebaseMessaging,
  GetTokenOptions,
} from '@capacitor-firebase/messaging';
import { Capacitor } from '@capacitor/core';
import { vapidKey } from '../../notifications/firebase';
import { toast } from 'react-toastify';

export function QuestionFormPage() {
  const addListeners = useCallback(() => {
    FirebaseMessaging.addListener('notificationReceived', (event) => {
      toast(
        <>
          <p>{event.notification?.title}</p>
          <p>{event.notification?.body}</p>
        </>,
      );
    });

    FirebaseMessaging.addListener('notificationActionPerformed', (event) => {
      console.log('notificationActionPerformed: ', { event });
    });
  }, []);

  useEffect(() => {
    FirebaseMessaging.requestPermissions().then(({ receive }) => {
      if (receive === 'granted') {
        addListeners();

        const options: GetTokenOptions = { vapidKey: vapidKey };

        if (Capacitor.getPlatform() === 'web') {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker
              .register('../firebase-messaging-sw.js', {
                scope: './',
              })
              .then(
                (registration) =>
                  (options.serviceWorkerRegistration = registration),
              )
              .catch(console.error);

            navigator.serviceWorker.addEventListener(
              'message',
              (event: any) => {
                const notification = new Notification(
                  event.data.notification.title,
                  {
                    body: event.data.notification.body,
                  },
                );
                notification.onclick = (event) => {
                  console.log('notification clicked: ', { event });
                };
              },
            );
          }
        }
        FirebaseMessaging.getToken(options).then(({ token }) => {
          console.log('token: ', token);
        });
      } else {
        FirebaseMessaging.requestPermissions();
      }
    });
  }, []);

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
