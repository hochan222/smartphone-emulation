import { renderView } from './view/index';
import initController from './controller/index';
import './style.css';

const app = (): void => {
  renderView();
  initController();
};

app();
