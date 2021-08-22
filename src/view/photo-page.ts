import { $ } from '../@shared/utils';
import { images, spiderMan } from '../assets/index';
import './photo-page.css';

const imageTagWrapper = ({ src, name }: { src: string; name: string }): string => {
  return `<image class="photo-scroll-image" src="${src}" data-name="${name}"/>`;
};

const photoScrollWrapper = (): string => {
  return `<div class="photo-scroll">
            ${images.map(({ name, src }) => imageTagWrapper({ name, src })).join('')}
          </div>`;
};

const photoSelectWrapper = (): string => {
  return `<div class="photo-select">
            <image class="photo-select-image" src="${spiderMan}"/>
          </div>`;
};

const photoWrapper = (navigation: string, scrollBar: string, selectImage: string): string => {
  return `<section class="photo">
            ${navigation}
            <article class="photo-inner">
              ${scrollBar}
              ${selectImage}
            </article>
          </section>`;
};

const renderPhotoPage = (navigation: string): void => {
  const appId = $('#app') as HTMLDivElement;

  appId.innerHTML = '';
  appId.insertAdjacentHTML('beforeend', photoWrapper(navigation, photoScrollWrapper(), photoSelectWrapper()));
};

export default renderPhotoPage;
