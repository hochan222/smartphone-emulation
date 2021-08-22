import { $ } from '../@shared/utils';
import { images } from '../assets/index';
import './photo-page.css';

const imageTagWrapper = ({ src, name }: { src: string; name: string }): string => {
  return `<image class="photo-scroll-image" src="${src}" data-name="${name}"/>`;
};

const photoScrollWrapper = (): string => {
  return `<div class="photo-scroll">
            ${images.map(({ name, src }) => imageTagWrapper({ name, src }))}
          </div>`;
};

const photoWrapper = (navigation: string, apps: string): string => {
  return `<div class="photo">
            ${navigation}
            <div class="photo-inner">
              ${apps}
              photo
            </div>
          </div>`;
};

const renderPhotoPage = (navigation: string): void => {
  const appId = $('#app') as HTMLDivElement;

  appId.innerHTML = '';
  appId.insertAdjacentHTML('beforeend', photoWrapper(navigation, photoScrollWrapper()));
};

export default renderPhotoPage;
