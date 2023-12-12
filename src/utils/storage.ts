const storage = window.localStorage;

export const setItem = (key: string, value: boolean) => {
  storage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string, defaultValue: boolean) => {
  const currentTheme =
    JSON.parse(storage.getItem(key) as string) || defaultValue;

  return currentTheme;
};
