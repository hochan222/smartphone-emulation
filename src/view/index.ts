import renderHomePage from './home-page';
import { getCurrentDate } from '../@shared/utils';
import getNavigationWrapper from './navigation';

const renderView = (): void => {
  renderHomePage(getNavigationWrapper({ currentTime: getCurrentDate() }));
};

export default renderView;
