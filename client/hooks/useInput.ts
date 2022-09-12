import React, { ChangeEvent, Dispatch, SetStateAction, UIEvent, useCallback, useState } from 'react';

type ReturnTypes<T = any> = [T, (event: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T = any>(initialData: T): ReturnTypes => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as unknown as T);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
