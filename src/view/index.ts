import renderHomePage from './home-page';

interface IgetNavigationWrapper {
  currentTime: string;
  backButton?: string;
  newButton?: string;
}

const getNavigationWrapper = ({ currentTime, backButton, newButton }: IgetNavigationWrapper) => {
  return `<nav>
              ${backButton === undefined ? '' : backButton}
              ${currentTime}
              ${newButton === undefined ? '' : newButton}
            </nav>`;
};

const renderView = (): void => {
  renderHomePage(getNavigationWrapper({ currentTime: '현재 시각 14시' }));
};

export default renderView;
