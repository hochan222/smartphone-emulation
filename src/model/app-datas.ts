interface IappData {
  name: string;
  order: number;
}

const appInitDatas = [
  {
    name: '알람',
    order: 1,
  },
  {
    name: '메모',
    order: 2,
  },
  {
    name: '사진',
    order: 3,
  },
];

export { IappData, appInitDatas };
