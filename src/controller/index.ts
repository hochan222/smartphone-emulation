import { $, atoi, getCurrentDate } from '../@shared/utils';
import { renderAlarmList } from '../view/alarm-page';
import { historyRouter } from '../@shared/router';
import homePageController from './home-page';
import model from '../model';

const NotifyAlarm = (currentDate: string): void => {
  const currentHour = atoi(currentDate.split(' ')[3] as string) as string;
  const currentMinute = atoi(currentDate.split(' ')[4] as string) as string;
  const currentSecond = atoi(currentDate.split(' ')[5] as string) as string;

  if (currentSecond !== '0') {
    return;
  }
  const alarmData = model.getLocalStorageAlarmData('alarmData');
  alarmData?.forEach(({ meridiem, hour, minute }): void => {
    if (
      (meridiem === 'pm' || meridiem === 'am') &&
      hour === (meridiem === 'pm' ? String(+currentHour - 12) : currentHour) &&
      minute === currentMinute
    ) {
      alert(`[알림] ${meridiem === 'pm' ? '오후' : '오전'} ${currentHour}시 ${currentMinute}분입니다.`);
      model.removeLocalStorageAlarmData('alarmData', meridiem, hour, minute);
      renderAlarmList();
    }
  });
};

const updateNavigationTime = () => {
  setInterval(() => {
    const navTimeElement = $('.nav__time') as HTMLSpanElement;
    const currentDate = getCurrentDate();
    NotifyAlarm(currentDate);
    navTimeElement.innerText = currentDate;
  }, 1000);
};

const initController = (): void => {
  updateNavigationTime();
  window.addEventListener('popstate', () => historyRouter(window.location.pathname));
  homePageController();
};

export default initController;
