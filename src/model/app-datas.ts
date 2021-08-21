interface IappData {
  name: string;
  order: number;
  route: string;
}

const appInitDatas = [
  {
    name: '알람',
    order: 1,
    route: '/alarm',
  },
  {
    name: '메모',
    order: 2,
    route: '/memo',
  },
  {
    name: '사진',
    order: 3,
    route: '/photo',
  },
];

export { IappData, appInitDatas };
