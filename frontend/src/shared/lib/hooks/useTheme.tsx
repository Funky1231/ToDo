import { useEffect, useState } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

const LOCAL_STORAGE_THEME_KEY = 'theme';
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initTheme = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
  || (prefersDarkMode ? Theme.Dark : Theme.Light);

export const useTheme = () => {
  const [ theme, setTheme ] = useState<Theme>(initTheme);

  useEffect(() => {
    document.body.classList.toggle(Theme.Dark, theme === Theme.Dark);
    window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [ theme ]);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
