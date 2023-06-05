import { AppRouter } from '@/app/providers/router';
import { MainLayout } from '@/shared/layouts/MainLayout';
import './styles/main.scss';

function App() {
  return (
    <>
      <MainLayout
        content={<AppRouter />}
      />
    </>
  );
}

export default App;
