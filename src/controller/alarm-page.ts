import { historyRouterBack } from '../@shared/router';
import { $ } from '../@shared/utils';

const alarmPageController = (): void => {
  $('#nav-back-button')?.addEventListener('click', historyRouterBack);
};

export default alarmPageController;
