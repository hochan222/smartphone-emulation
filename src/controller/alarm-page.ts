import { historyRouterBack } from '../@shared/router';
import { $ } from '../@shared/utils';
import { alarmInputWrapper } from '../view/alarm-page';
import model from '../model';

const clickAlarmSubmitButton = (): void => {
  const meridiemSelectElement = $('#alarm-meridiem-select') as HTMLSelectElement;
  const hourSelectElement = $('#alarm-hour-select') as HTMLSelectElement;
  const minuteSelectElement = $('#alarm-minute-select') as HTMLSelectElement;
  const alarmData = {
    meridiem: meridiemSelectElement.value,
    hour: hourSelectElement.value,
    minute: minuteSelectElement.value,
  };
  model.setLocalStorageAlarmData('alarmData', alarmData);
  $('.alarm__input')?.remove();
  // TODO:: render alarmList
};

const clickNavNewButton = (): void => {
  $('.alarm__input')?.remove();
  $('.alarm-inner')?.insertAdjacentHTML('afterbegin', alarmInputWrapper());
  $('#alarm-submit-button')?.addEventListener('click', clickAlarmSubmitButton);
};

const alarmPageController = (): void => {
  $('#nav-back-button')?.addEventListener('click', historyRouterBack);
  $('#nav-new-button')?.addEventListener('click', clickNavNewButton);
};

export default alarmPageController;
