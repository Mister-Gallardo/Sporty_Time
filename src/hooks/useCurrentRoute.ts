import { useEffect, useState } from 'react';
import { Route, matchPath } from 'react-router';
import { history } from '../services/history/service';

export interface IUseCurrentRouteProps<ExtraParams extends object> {
  routes: React.ComponentProps<typeof Route<ExtraParams>>[];
}

export function useCurrentRoute<ExtraParams extends object>(
  props: IUseCurrentRouteProps<ExtraParams>,
) {
  const { routes } = props;
  const [currentPath, setCurrentPath] = useState<string | undefined>(
    history.location.pathname,
  );
  useEffect(() => {
    const unregister = history.listen((e) => {
      setCurrentPath(e.pathname);
    });
    return unregister;
  });

  const route = currentPath
    ? routes.find((route) => matchPath(currentPath, route))
    : undefined;

  return route;
}
