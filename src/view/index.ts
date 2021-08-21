import renderHomePage from './home-page';
import { getCurrentDate } from '../@shared/utils';
import './style.css';

interface IgetNavigationWrapper {
  currentTime: string;
  backButton?: string;
  newButton?: string;
}

const getNavigationWrapper = ({ currentTime, backButton, newButton }: IgetNavigationWrapper): string => {
  return `<nav>
            ${backButton === undefined ? '' : `<button id="nav-back-button" class="nav__button">${backButton}</button>`}
            <span class="nav__time">${currentTime}</span>
            ${newButton === undefined ? '' : `<button id="nav-new-button" class="nav__button">${newButton}</button>`}
          </nav>`;
};

const renderView = (): void => {
  renderHomePage(getNavigationWrapper({ currentTime: getCurrentDate() }));
};

export { renderView, getNavigationWrapper };
