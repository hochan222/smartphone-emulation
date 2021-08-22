import { getCurrentDate } from './utils';
import { renderAlarmPage } from '../view/alarm-page';
import { renderMemoPage } from '../view/memo-page';
import renderPhotoPage from '../view/photo-page';
import renderHomePage from '../view/home-page';
import homePageController from '../controller/home-page';
import alarmPageController from '../controller/alarm-page';
import memoPageController from '../controller/memo-page';
import photoPageController from '../controller/photo-page';
import getNavigationWrapper from '../view/navigation';
import { ROUTE_EMPTY_ERROR } from './constants';

const historyRouter = (route: string | undefined): void => {
  if (!route) {
    throw Error(ROUTE_EMPTY_ERROR);
  }
  if (route === '/') {
    renderHomePage(getNavigationWrapper({ currentTime: getCurrentDate() }));
    homePageController();
  } else if (route === '/alarm') {
    renderAlarmPage(getNavigationWrapper({ currentTime: getCurrentDate(), backButton: 'BACK', newButton: 'NEW' }));
    alarmPageController();
  } else if (route === '/memo') {
    renderMemoPage(getNavigationWrapper({ currentTime: getCurrentDate(), backButton: 'BACK', newButton: 'NEW' }));
    memoPageController();
  } else if (route === '/photo') {
    renderPhotoPage(getNavigationWrapper({ currentTime: getCurrentDate(), backButton: 'BACK', newButton: 'NEW' }));
    photoPageController();
  }
};

const historyRouterBack = (): void => {
  window.history.back();
};

export { historyRouter, historyRouterBack };
