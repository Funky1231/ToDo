import { lazy } from 'react';

export const MainPageAsync = lazy(() =>
  import('./MainPage').then(({ MainPage }) => ({ default: MainPage })),
);
