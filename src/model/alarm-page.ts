import { ALARM_LIST_MAX_COUNT, STORAGE_MAXIMUN_ALARM_LIST_ERROR } from '../@shared/constants';
import { IalarmData } from './interface';

export default {
  setLocalStorageAlarmData(key: string, appDatas: IalarmData): void {
    const alarmData = this.getLocalStorageAlarmData(key) ? (this.getLocalStorageAlarmData(key) as []) : [];
    if (alarmData.length > ALARM_LIST_MAX_COUNT - 1) {
      alert(STORAGE_MAXIMUN_ALARM_LIST_ERROR);
      return;
    }
    localStorage.setItem(key, JSON.stringify([...alarmData, appDatas]));
  },
  getLocalStorageAlarmData(key: string): IalarmData[] | null {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  },
  removeLocalStorageAlarmDataIndex(key: string, index: number): void {
    const alarmData = this.getLocalStorageAlarmData('alarmData');
    if (!alarmData) {
      return;
    }
    alarmData.splice(index, 1);
    localStorage.setItem(key, JSON.stringify([...alarmData]));
  },
  removeLocalStorageAlarmData(key: string, alarmMeridiem: string, alarmHour: string, alarmMinute: string): void {
    const alarmData = this.getLocalStorageAlarmData('alarmData');
    if (!alarmData) {
      return;
    }
    const index = alarmData.findIndex(({ meridiem, hour, minute }) => {
      return alarmMeridiem === meridiem && alarmHour === hour && alarmMinute === minute;
    });
    if (index < 0) {
      return;
    }
    alarmData.splice(index, 1);
    localStorage.setItem(key, JSON.stringify([...alarmData]));
  },
};

// removeLocalStorageAlarmData(key: string, alarmMeridiem: string, alarmHour: string, alarmMinute: string): void {
//   const alarmData = this.getLocalStorageAlarmData('alarmData');
//   if (!alarmData) {
//     return;
//   }
//   const refinedAlarmData = alarmData.filter(({ meridiem, hour, minute }) => {
//     return alarmMeridiem !== meridiem || alarmHour !== hour || alarmMinute !== minute;
//   });
//   localStorage.setItem(key, JSON.stringify([...refinedAlarmData]));
// },
