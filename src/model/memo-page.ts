export default {
  setLocalStorageMemoData(key: string, appData: string): void {
    const alarmData = this.getLocalStorageMemoData(key) ? (this.getLocalStorageMemoData(key) as []) : [];
    // if (alarmData.length > ALARM_LIST_MAX_COUNT - 1) {
    //   alert(STORAGE_MAXIMUN_ALARM_LIST_ERROR);
    //   return;
    // }
    localStorage.setItem(key, JSON.stringify([...alarmData, appData]));
  },
  getLocalStorageMemoData(key: string): string[] | null {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  },
};
