import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app/App';
import { BrowserRouter } from 'react-router-dom';
import { Flowbite } from 'flowbite-react';
import './app/styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Flowbite>
        <App />
      </Flowbite>
    </BrowserRouter>
  </React.StrictMode>,
);
