import { IgetNavigationWrapper } from '../model/interface';
import './navigation.css';

const getNavigationWrapper = ({ currentTime, backButton, newButton }: IgetNavigationWrapper): string => {
  return `<nav>
           ${backButton === undefined ? '' : `<button id="nav-back-button" class="nav__button">${backButton}</button>`}
           <span class="nav__time"><time>${currentTime}</time></span>
           ${newButton === undefined ? '' : `<button id="nav-new-button" class="nav__button">${newButton}</button>`}
          </nav>`;
};

export default getNavigationWrapper;
