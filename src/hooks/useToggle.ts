import { useState } from 'react';

export default function useToggle() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggle = (val?: boolean) =>
    setIsActive((prev) => (val !== undefined ? val : !prev));

  return [isActive, toggle] as const;
}
