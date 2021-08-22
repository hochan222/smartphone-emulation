import { MEMO_EMPTY_MESSAGE_ERROR } from '../@shared/constants';
import { historyRouterBack } from '../@shared/router';
import { $ } from '../@shared/utils';
import model from '../model';
import { memoInputWrapper, renderMemoList } from '../view/memo-page';

const keypressMemoSubmitButton = (event: KeyboardEvent): void => {
  const memoInputElement = $('#memo__input') as HTMLInputElement;
  if (event.code !== 'Enter') {
    return;
  }
  if (memoInputElement.value === '') {
    alert(MEMO_EMPTY_MESSAGE_ERROR);
  }
  model.setLocalStorageMemoData('memoData', memoInputElement.value);
  $('.memo__input')?.remove();
  renderMemoList();
};

const clickNavNewButton = (): void => {
  $('#memo__input')?.remove();
  $('.memo-inner')?.insertAdjacentHTML('afterbegin', memoInputWrapper());
  $('#memo__input')?.addEventListener('keypress', keypressMemoSubmitButton);
};

const clickMemoList = (event: MouseEvent): void => {
  const eventTarget = event.target as HTMLElement;
  if (!eventTarget.classList.contains('memo__list-element')) {
    return;
  }
  const memoListElements = eventTarget.parentNode?.children as HTMLCollection;
  for (let i = 0; i < memoListElements.length; i += 1) {
    memoListElements[i]?.classList.toggle('memo__list-element--open', false);
  }
  eventTarget.classList.add('memo__list-element--open');
};

const memoPageController = (): void => {
  $('#nav-back-button')?.addEventListener('click', historyRouterBack);
  $('#nav-new-button')?.addEventListener('click', clickNavNewButton);
  $('.memo')?.addEventListener('click', clickMemoList);
};

export default memoPageController;
