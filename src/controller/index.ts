import { historyRouter } from '../@shared/router';
import { $, getCurrentDate } from '../@shared/utils';
import homePageController from './home-page';

const updateNavigationTime = () => {
  setInterval(() => {
    const navTimeElement = $('.nav__time') as HTMLSpanElement;
    navTimeElement.innerText = getCurrentDate();
  }, 1000);
};

const initController = (): void => {
  updateNavigationTime();
  window.addEventListener('popstate', () => historyRouter(window.location.pathname));
  homePageController();
};

export default initController;
