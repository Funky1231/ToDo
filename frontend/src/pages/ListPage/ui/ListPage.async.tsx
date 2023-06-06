import { lazy } from 'react';

export const ListPageAsync = lazy(() =>
  import('./ListPage').then(({ ListPage }) => ({ default: ListPage })),
);
