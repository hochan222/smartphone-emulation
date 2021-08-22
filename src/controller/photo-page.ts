import { historyRouterBack } from '../@shared/router';
import { $ } from '../@shared/utils';

const clickPhotoScroll = (event: MouseEvent): void => {
  const eventTarget = event.target as HTMLElement;
  if (!eventTarget.classList.contains('photo-scroll-image')) {
    return;
  }
  const imageSrc = (eventTarget as HTMLImageElement).src;
  const photoListElements = eventTarget.parentNode?.children as HTMLCollection;
  for (let i = 0; i < photoListElements.length; i += 1) {
    photoListElements[i]?.classList.toggle('photo-scroll-image--click', false);
  }
  eventTarget.classList.add('photo-scroll-image--click');
  const photoSelectImageElement = $('.photo-select-image') as HTMLImageElement;
  photoSelectImageElement.src = imageSrc;
};

const initPhotoPage = (): void => {
  $('.photo-scroll-image[data-name="spider-man"]')?.click();
  $('.photo-scroll')?.scrollTo(145, 0);
};

const photoPageController = (): void => {
  $('#nav-back-button')?.addEventListener('click', historyRouterBack);
  $('.photo-scroll')?.addEventListener('click', clickPhotoScroll);
  initPhotoPage();
};

export default photoPageController;
