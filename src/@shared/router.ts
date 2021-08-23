import getNavigationWrapper from '../view/navigation';
import { renderAlarmPage } from '../view/alarm-page';
import { renderMemoPage } from '../view/memo-page';
import renderPhotoPage from '../view/photo-page';
import renderHomePage from '../view/home-page';
import alarmPageController from '../controller/alarm-page';
import photoPageController from '../controller/photo-page';
import homePageController from '../controller/home-page';
import memoPageController from '../controller/memo-page';
import { ROUTE_EMPTY_ERROR } from './constants';
import { $, getCurrentDate } from './utils';

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
    const navNewButtonElement = $('#nav-new-button') as HTMLButtonElement;
    navNewButtonElement.classList.toggle('nav__button--block', true);
    navNewButtonElement.disabled = true;
    photoPageController();
  }
};

const historyRouterBack = (): void => {
  window.history.back();
};

export { historyRouter, historyRouterBack };
