import { useLocation, useHistory } from 'react-router-dom';
import { useMemo } from 'react';

export default function useSearchParams() {
  const location = useLocation();
  const history = useHistory();

  const searchParams = useMemo(() => {
    return new URLSearchParams(location.search);
  }, [location.search]);

  const getSearchParam = (name: string): string | null => {
    return searchParams.get(name);
  };

  const setSearchParam = (name: string, value?: string) => {
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }

    history.push({
      search: searchParams.toString(),
    });
  };

  return [getSearchParam, setSearchParam] as const;
}
