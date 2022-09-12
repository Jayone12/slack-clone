import React, { ChangeEvent, Dispatch, SetStateAction, UIEvent, useCallback, useState } from 'react';

type ReturnTypes<T> = [T, (event: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

/**
 * 커스텀 hook으로 텍스트 입력값을 받아 처리하는 hook이다.
 * @param 초기값
 */
const useInput = (initialData: string): ReturnTypes<string> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
