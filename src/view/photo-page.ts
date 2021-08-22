import { $ } from '../@shared/utils';
import webpack from '../assets/webpack.png';

const photoWrapper = (navigation: string): string => {
  return `<div class="photo">
            ${navigation}
            <div class="photo-inner">
              <img src="${webpack}"/>
              photo
            </div>
          </div>`;
};

const renderPhotoPage = (navigation: string): void => {
  const appId = $('#app') as HTMLDivElement;

  appId.innerHTML = '';
  appId.insertAdjacentHTML('beforeend', photoWrapper(navigation));
};

export default renderPhotoPage;
