import { $ } from '../@shared/utils';
import './home-page.css';
import { IappData, appInitDatas } from '../model/app-datas';
import model from '../model/index';

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

const getData = (appDatas: IappData[]): IappData[] => {
  const localAppDatas = model.getLocalStorageAppData('appDatas');
  if (localAppDatas === null) {
    model.setLocalStorageAppData('appDatas', appDatas);
    return appDatas;
  }
  return localAppDatas;
};

const renderHomePage = (navigation: string): void => {
  const appDatas: IappData[] = getData(appInitDatas);

  $('.app')?.insertAdjacentHTML(
    'beforeend',
    homeWrapper(
      navigation,
      appDatas
        .sort((a, b) => a.order - b.order)
        .map((appData) => {
          return appIconWrapper(appData.name);
        })
        .join(''),
    ),
  );
};

export default renderHomePage;
