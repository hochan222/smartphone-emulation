import { historyRouterBack } from '../@shared/router';
import { $, getElementIndex } from '../@shared/utils';
import { alarmInputWrapper, renderAlarmList } from '../view/alarm-page';
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
  renderAlarmList();
};

const clickNavNewButton = (): void => {
  $('.alarm__input')?.remove();
  $('.alarm-inner')?.insertAdjacentHTML('afterbegin', alarmInputWrapper());
  $('#alarm-submit-button')?.addEventListener('click', clickAlarmSubmitButton);
};

const clickAlarmListElementButton = (event: MouseEvent): void => {
  const eventTarget = event.target as HTMLElement;
  if (!eventTarget.classList.contains('alarm__list-element-button')) {
    return;
  }
  model.removeLocalStorageAlarmDataIndex('alarmData', getElementIndex(eventTarget.parentElement as HTMLElement));
  (eventTarget.parentNode as HTMLDivElement).remove();
};

const alarmPageController = (): void => {
  $('#nav-back-button')?.addEventListener('click', historyRouterBack);
  $('#nav-new-button')?.addEventListener('click', clickNavNewButton);
  $('.alarm-inner')?.addEventListener('click', clickAlarmListElementButton);
};

export default alarmPageController;
