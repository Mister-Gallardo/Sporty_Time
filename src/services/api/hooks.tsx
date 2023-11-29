import { useEffect, useReducer } from 'react';
import { isAuthorized } from '../auth/service';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../user/service';

export const useIsAuthorized = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    document.addEventListener('auth-changed', forceUpdate);
    return () => document.removeEventListener('auth-changed', forceUpdate);
  }, []);
  return isAuthorized();
};

export const useUserInfo = () => {
  const isAuthorized = useIsAuthorized();

  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: getUserInfo,
    retry: false,
    enabled: isAuthorized,
  });

  return data?.data;
};
