import { FC, ReactNode } from 'react';
import { Header } from '../../components/header/header';

type MainWrapperProps = {
  children?: ReactNode;
};

export const MainScreenWrapper: FC<MainWrapperProps> = ({ children }) => (
  <div className="page page--gray page--main">
    <Header />
    {children}
  </div>
);
