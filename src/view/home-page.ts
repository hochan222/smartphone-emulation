import { $ } from '../@shared/utils';
import appInitDatas from '../model/app-datas';
import { IappData } from '../model/interface';
import model from '../model/index';

import './home-page.css';

const appIconWrapper = (appName: string, appRoute: string): string => {
  return `<div class="dragzone">
            <button class="app-icon draggable" draggable="true" data-route="${appRoute}">
            ${appName}
            </button>
          </div>`;
};

const homeWrapper = (navigation: string, apps: string): string => {
  return `<section class="home">
            ${navigation}
            <nav class="home-inner">
              ${apps}
            </nav>
          </section>`;
};

// 코드 수정시 LocalStorage가 존재해서, Update 사항이 반영되지 않는 위험이 있음.
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
  const appId = $('#app') as HTMLDivElement;

  appId.innerHTML = '';
  appId.insertAdjacentHTML(
    'beforeend',
    homeWrapper(
      navigation,
      appDatas
        .sort((a, b) => a.order - b.order)
        .map((appData) => {
          return appIconWrapper(appData.name, appData.route);
        })
        .join(''),
    ),
  );
};

export default renderHomePage;
