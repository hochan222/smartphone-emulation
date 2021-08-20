import { $ } from '../@shared/utils';
import './home-page.css';
import appInitDatas from './app-datas';

const appIconWrapper = (appName: string): string => {
  return `<button class="app-icon">${appName}</button>`;
};

const homeWrapper = (navigation: string, apps: string): string => {
  return `<div class="home">
            ${navigation}
            <div class="home-inner">
            ${apps}
            </div>
          </div>`;
};

const renderHomePage = (navigation: string): void => {
  $('.app')?.insertAdjacentHTML(
    'beforeend',
    homeWrapper(
      navigation,
      appInitDatas
        .sort((a, b) => a.order - b.order)
        .map((appData) => {
          return appIconWrapper(appData.name);
        })
        .join(''),
    ),
  );
};

export default renderHomePage;
