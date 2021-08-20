import { $ } from '../@shared/utils';

const homeWrapper = (navigation: string): string => {
  return `<div class="home">
            ${navigation}
            <div class="home-inner">
            </div>
          </div>`;
};

const renderHomePage = (navigation: string): void => {
  $('.app')?.insertAdjacentHTML('beforeend', homeWrapper(navigation));
};

export default renderHomePage;
