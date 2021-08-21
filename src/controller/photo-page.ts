import { historyRouterBack } from '../@shared/router';
import { $ } from '../@shared/utils';

const photoPageController = (): void => {
  $('#nav-back-button')?.addEventListener('click', historyRouterBack);
};

export default photoPageController;
