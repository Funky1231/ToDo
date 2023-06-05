import { useEffect, useState } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

const LOCAL_STORAGE_THEME_KEY = 'theme';
const initTheme = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light);

export const useTheme = () => {
  const [ theme, setTheme ] = useState<Theme>(initTheme);

  useEffect(() => {
    if (theme === Theme.Dark) {
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove(Theme.Dark);
    }
  }, [ theme ]);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
