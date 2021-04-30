import React from 'react'

export const useLocalStorage = (
  key: string,
  initialValue: any = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });
  const prevKey: any = React.useRef(key);
  React.useEffect(() => {
    if (prevKey.current !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKey.current = key;

    window.localStorage.setItem(key, serialize(state));
  }, [key, serialize, state]);

  return [state, setState];
};
