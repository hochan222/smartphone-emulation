import { historyRouterBack } from '../@shared/router';
import { $ } from '../@shared/utils';

const memoPageController = (): void => {
  $('#nav-back-button')?.addEventListener('click', historyRouterBack);
};

export default memoPageController;
