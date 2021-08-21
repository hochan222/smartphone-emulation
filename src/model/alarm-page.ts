import { IalarmData } from './interface';

export default {
  setLocalStorageAlarmData(key: string, appDatas: IalarmData): void {
    const alarmData = this.getLocalStorageAlarmData(key) ? (this.getLocalStorageAlarmData(key) as []) : [];
    localStorage.setItem(key, JSON.stringify([...alarmData, appDatas]));
  },
  getLocalStorageAlarmData(key: string): IalarmData[] | null {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  },
  removeLocalStorageAlarmData(key: string, index: number): void {
    const alarmData = this.getLocalStorageAlarmData('alarmData');
    if (!alarmData) {
      return;
    }
    alarmData.splice(index, 1);
    localStorage.setItem(key, JSON.stringify([...alarmData]));
  },
};
