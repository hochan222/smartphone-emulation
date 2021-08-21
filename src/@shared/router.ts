import { getNavigationWrapper } from '../view';
import { getCurrentDate } from './utils';
import renderAlarmPage from '../view/alarm-page';
import renderMemoPage from '../view/memo-page';
import renderPhotoPage from '../view/photo-page';
import renderHomePage from '../view/home-page';
import homePageController from '../controller/home-page';

const historyRouter = (route: string | undefined): void => {
  if (!route) {
    throw Error('[ROUTE] empty route');
  }
  if (route === '/') {
    renderHomePage(getNavigationWrapper({ currentTime: getCurrentDate() }));
    homePageController();
  } else if (route === '/alarm') {
    renderAlarmPage(getNavigationWrapper({ currentTime: getCurrentDate() }));
  } else if (route === '/memo') {
    renderMemoPage(getNavigationWrapper({ currentTime: getCurrentDate() }));
  } else if (route === '/photo') {
    renderPhotoPage(getNavigationWrapper({ currentTime: getCurrentDate() }));
  }
};

export default historyRouter;
