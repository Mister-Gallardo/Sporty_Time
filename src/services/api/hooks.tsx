import { useEffect, useReducer } from 'react';
import { isAuthorized } from '../auth/service';

export const useIsAuthorized = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    document.addEventListener('auth-changed', forceUpdate);
    return () => document.removeEventListener('auth-changed', forceUpdate);
  }, []);
  return isAuthorized();
};
