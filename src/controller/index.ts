import { historyRouter } from '../@shared/router';
import { $, atoi, getCurrentDate } from '../@shared/utils';
import model from '../model';
import { renderAlarmList } from '../view/alarm-page';
import homePageController from './home-page';

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
      (meridiem === 'pm' || 'am') &&
      hour === (meridiem === 'pm' ? String(+currentHour + 12) : currentHour) &&
      minute === currentMinute
    ) {
      alert(`[알림] ${meridiem === 'pm' ? '오후' : '오전'} ${currentHour}시 ${currentMinute}분입니다.`);
      model.removeLocalStorageAlarmData(
        'alarmData',
        +currentHour > 12 ? 'pm' : 'am',
        +currentHour > 12 ? String(+currentHour - 12) : currentHour,
        currentMinute,
      );
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
