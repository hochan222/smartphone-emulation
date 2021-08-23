import initController from './controller/index';
import renderView from './view/index';

import './style.css';

const app = (): void => {
  renderView();
  initController();
};

app();
