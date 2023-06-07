import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/app/App';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { Flowbite } from 'flowbite-react';
import { QueryClient, QueryClientProvider } from 'react-query';

import './app/styles/main.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Flowbite>
          <App />
        </Flowbite>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
