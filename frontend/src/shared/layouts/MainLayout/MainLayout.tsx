import { Header } from '@/widgets/Header';
import { FC } from 'react';

interface MainLayoutProps {
  content: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ content }) => {

  return (
    <>
      <Header />
      <main className="px-2 py-10 sm:px-4">
        <div className="container mx-auto">{content}</div>
      </main>
    </>
  );
};
