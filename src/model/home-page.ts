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
  switchAppDataOrder(lhs: string, rhs: string): void {
    if (lhs === rhs) {
      return;
    }
    const datas = this.getLocalStorageAppData('appDatas');
    let lhsOrder: number;
    let rhsOrder: number;

    datas?.forEach((data) => {
      if (data.name === lhs) {
        lhsOrder = data.order;
      } else if (data.name === rhs) {
        rhsOrder = data.order;
      }
    });
    const switchOrderDatas = datas?.map((data) => {
      if (data.name === lhs) {
        return { ...data, order: rhsOrder };
      }
      if (data.name === rhs) {
        return { ...data, order: lhsOrder };
      }
      return data;
    });
    if (switchOrderDatas) {
      this.setLocalStorageAppData('appDatas', switchOrderDatas);
    }
  },
};
