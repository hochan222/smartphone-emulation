export default {
  setLocalStorageMemoData(key: string, appData: string): void {
    const alarmData = this.getLocalStorageMemoData(key) ? (this.getLocalStorageMemoData(key) as []) : [];
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
