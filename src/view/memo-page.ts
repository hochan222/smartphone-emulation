import { $ } from '../@shared/utils';
import model from '../model';
import './memo-page.css';

const memoInputWrapper = (): string => {
  return `<input id="memo__input" class="memo__input" placeholder="메모를 입력하세요">`;
};

const memoListElementWrapper = (memo: string): string => {
  return `<p class="memo__list-element">${memo}</p>`;
};

const memoListWrapper = (): string => {
  const memoData = model.getLocalStorageMemoData('memoData');
  const memoListTag = memoData?.map((memo) => memoListElementWrapper(memo)).join('');
  return `<div class="memo__list">${memoListTag}</div>`;
};

const memoWrapper = (navigation: string, apps: string): string => {
  return `<section class="memo">
            ${navigation}
            <article class="memo-inner">
              ${apps}
            </article>
          </section>`;
};

const renderMemoList = (): void => {
  const alarmInnerElement = $('.memo-inner') as HTMLDivElement;

  alarmInnerElement.innerHTML = '';
  alarmInnerElement.insertAdjacentHTML('beforeend', memoListWrapper());
};

const renderMemoPage = (navigation: string): void => {
  const appId = $('#app') as HTMLDivElement;

  appId.innerHTML = '';
  appId.insertAdjacentHTML('beforeend', memoWrapper(navigation, memoListWrapper()));
};

export { renderMemoPage, memoInputWrapper, renderMemoList };
