import { IappData } from './app-datas';

export default {
  setLocalStorageAppData(key: string, appDatas: IappData[]): void {
    localStorage.setItem(key, JSON.stringify(appDatas));
  },
  getLocalStorageAppData(key: string): IappData[] | null {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  },
};
