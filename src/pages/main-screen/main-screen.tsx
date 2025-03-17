import { FC } from 'react';
import { MainScreenWrapper } from './main-screen-wrapper';
import MainScreenContent from './main-screen-content';

const MainScreen: FC = () =>
  (
    <MainScreenWrapper>
      <MainScreenContent />
    </MainScreenWrapper>
  );
export default MainScreen;
