import { RouteObject } from 'react-router-dom';
import { RoutesPaths } from '@/shared/consts/routes';
import { MainPage } from '@/pages/MainPage';
import { UserPage } from '@/pages/UserPage';
import { ListPage } from '@/pages/ListPage/ui/ListPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const routesConfig: RouteObject[] = [
  {
    path: RoutesPaths.MAIN,
    element: <MainPage />,
  },
  {
    path: RoutesPaths.USER,
    element: <UserPage />,
  },
  {
    path: RoutesPaths.LIST,
    element: <ListPage />,
  },
  {
    path: RoutesPaths.NOT_FOUND,
    element: <NotFoundPage />,
  },
];

