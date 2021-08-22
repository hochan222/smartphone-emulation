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

const photoPageController = (): void => {
  $('#nav-back-button')?.addEventListener('click', historyRouterBack);
  $('.photo-scroll')?.addEventListener('click', clickPhotoScroll);
};

export default photoPageController;
