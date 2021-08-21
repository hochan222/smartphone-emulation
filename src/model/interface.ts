interface IalarmData {
  meridiem: string;
  hour: string;
  minute: string;
}

interface IappData {
  name: string;
  order: number;
  route: string;
}

interface IgetNavigationWrapper {
  currentTime: string;
  backButton?: string;
  newButton?: string;
}

export { IalarmData, IappData, IgetNavigationWrapper };
