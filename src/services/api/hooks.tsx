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

export const useFullUserData = () => {
  const isAuthorized = useIsAuthorized();

  const { data, ...rest } = useQuery({
    queryKey: ['user'],
    queryFn: getUserInfo,
    retry: false,
    enabled: isAuthorized,
  });
  return [data?.data, rest] as const;
};

export interface IUserInfoOptions {
  enabled?: boolean;
}

export const useUserInfo = (options: IUserInfoOptions = {}) => {
  const isAuthorized = useIsAuthorized();

  const { enabled = isAuthorized } = options;
  const { data, ...rest } = useQuery({
    queryKey: ['user'],
    queryFn: getUserInfo,
    retry: false,
    enabled,
  });
  return [data?.data?.user, rest] as const;
};

export const usePlayerProfile = () => {
  const isAuthorized = useIsAuthorized();

  const { data, ...rest } = useQuery({
    queryKey: ['user'],
    queryFn: getUserInfo,
    retry: false,
    enabled: isAuthorized,
  });

  const player = data?.data?.user.player;
  if (player) player.user = data.data.user;

  return [player, rest] as const;
};
