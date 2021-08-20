import { $ } from '../@shared/utils';

const getHomeWrapper = (navigation: string): string => {
  return `<div class="home">
            ${navigation}
            <div class="app-inner">
            </div>
          </div>`;
};

const renderHomePage = (navigation: string): void => {
  $('#app')?.insertAdjacentHTML('beforeend', getHomeWrapper(navigation));
};

export default renderHomePage;
