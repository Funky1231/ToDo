import React, { FC } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { Theme, useTheme } from '@/shared/lib/hooks/useTheme';
import classNames from 'classnames';

interface ThemeSwitcherProps {
  className?: string,
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={classNames(className, 'rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700')}
      onClick={toggleTheme}
    >
      {theme === Theme.Light ? <HiMoon className="h-5 w-5" /> : <HiSun className="h-5 w-5" />}
    </button>
  );
};
