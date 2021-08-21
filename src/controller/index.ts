import historyRouter from '../@shared/router';
import homePageController from './home-page';

const initController = (): void => {
  window.addEventListener('popstate', () => historyRouter(window.location.pathname));
  homePageController();
};

export default initController;
