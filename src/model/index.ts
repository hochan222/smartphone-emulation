import homePageModel from './home-page';
import alarmPageModel from './alarm-page';
import memoPageModel from './memo-page';

const model = {
  ...homePageModel,
  ...alarmPageModel,
  ...memoPageModel,
};

export default model;
