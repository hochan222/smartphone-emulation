import { IgetNavigationWrapper } from '../model/interface';

const getNavigationWrapper = ({ currentTime, backButton, newButton }: IgetNavigationWrapper): string => {
  return `<nav>
           ${backButton === undefined ? '' : `<button id="nav-back-button" class="nav__button">${backButton}</button>`}
           <span class="nav__time">${currentTime}</span>
           ${newButton === undefined ? '' : `<button id="nav-new-button" class="nav__button">${newButton}</button>`}
          </nav>`;
};

export default getNavigationWrapper;