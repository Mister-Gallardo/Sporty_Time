import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useSearchParam<T extends string | undefined = undefined>(
  name: string,
  defaultValue?: T,
) {
  const history = useHistory();
  const [paramValue, setParamValue] = useState<string | T>(() => {
    const urlSearchParams = new URLSearchParams(history.location.search);
    if (urlSearchParams.get(name) === null && defaultValue) {
      urlSearchParams.set(name, defaultValue);
      history.replace({ search: urlSearchParams.toString() });
    }
    return urlSearchParams.get(name) || (defaultValue as T);
  });

  useEffect(() => {
    const handleChange = () => {
      const urlSearchParams = new URLSearchParams(history.location.search);
      setParamValue(urlSearchParams.get(name) || '');
    };

    const unlisten = history.listen(handleChange);
    return unlisten;
  }, [name, history]);

  const setQueryParam = (value: string | T) => {
    if (value === paramValue) return;
    const urlSearchParams = new URLSearchParams(history.location.search);
    if (value) {
      urlSearchParams.set(name, value);
    } else {
      urlSearchParams.delete(name);
    }
    history.replace({ search: urlSearchParams.toString() });
    setParamValue(value);
  };

  return [paramValue, setQueryParam] as const;
}
