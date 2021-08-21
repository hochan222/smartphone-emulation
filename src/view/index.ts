import renderHomePage from './home-page';
import { getCurrentDate } from '../@shared/utils';

interface IgetNavigationWrapper {
  currentTime: string;
  backButton?: string;
  newButton?: string;
}

const getNavigationWrapper = ({ currentTime, backButton, newButton }: IgetNavigationWrapper): string => {
  return `<nav>
            ${backButton === undefined ? '' : backButton}
            ${currentTime}
            ${newButton === undefined ? '' : newButton}
          </nav>`;
};

const renderView = (): void => {
  renderHomePage(getNavigationWrapper({ currentTime: getCurrentDate() }));
};

export { renderView, getNavigationWrapper };
