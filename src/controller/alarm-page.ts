import { historyRouterBack } from '../@shared/router';
import { $ } from '../@shared/utils';
import { alarmInputWrapper } from '../view/alarm-page';

const clickNavNewButton = (): void => {
  $('.alarm__input')?.remove();
  $('.alarm-inner')?.insertAdjacentHTML('afterbegin', alarmInputWrapper());
};

const alarmPageController = (): void => {
  $('#nav-back-button')?.addEventListener('click', historyRouterBack);
  $('#nav-new-button')?.addEventListener('click', clickNavNewButton);
};

export default alarmPageController;
