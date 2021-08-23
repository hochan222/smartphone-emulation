import { getCurrentDate } from '../@shared/utils';
import getNavigationWrapper from './navigation';
import renderHomePage from './home-page';

const renderView = (): void => {
  renderHomePage(getNavigationWrapper({ currentTime: getCurrentDate() }));
};

export default renderView;
