import { $ } from '../@shared/utils';

const memoWrapper = (navigation: string): string => {
  return `<div class="memo">
            ${navigation}
            <div class="memo-inner">
              memo
            </div>
          </div>`;
};

const renderMemoPage = (navigation: string): void => {
  const appId = $('#app') as HTMLDivElement;

  appId.innerHTML = '';
  appId.insertAdjacentHTML('beforeend', memoWrapper(navigation));
};

export default renderMemoPage;
