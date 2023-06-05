import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from '../config';
import { Spinner } from 'flowbite-react';

const AppRouter = () => (
  <Suspense fallback={<Spinner size="xl" />}>
    <Routes>
      {routesConfig.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={element}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
