import { BROWSER_TITLE, HOME_DRAG_ERROR } from '../@shared/constants';
import { $, historyPushState } from '../@shared/utils';
import { historyRouter } from '../@shared/router';
import model from '../model';

const dragstartAppIconButtons = (event: MouseEvent): void => {
  const eventTarget = event.target as HTMLButtonElement;
  if (!eventTarget.classList.contains('app-icon')) {
    return;
  }
  eventTarget.classList.add('dragging');
};

const dragendAppIconButtons = (event: MouseEvent): void => {
  const eventTarget = event.target as HTMLButtonElement;
  if (!eventTarget.classList.contains('app-icon')) {
    return;
  }
  eventTarget.classList.remove('dragging');
};

const dragoverAppIconButtons = (event: MouseEvent): void => {
  event.preventDefault();
};

const dragenterAppIconButtons = (event: MouseEvent): void => {
  const eventTarget = event.target as HTMLButtonElement;
  if (!eventTarget.classList.contains('app-icon')) {
    return;
  }
  eventTarget.classList.add('dragenter');
};

const dragleaveAppIconButtons = (event: MouseEvent): void => {
  const eventTarget = event.target as HTMLButtonElement;
  if (!eventTarget.classList.contains('app-icon')) {
    return;
  }
  eventTarget.classList.remove('dragenter');
};

const dropAppIconButtons = (event: MouseEvent): void => {
  const draggingTarget = $('.dragging') as HTMLButtonElement;
  const eventTarget = event.target as HTMLElement;
  event.preventDefault();

  if (draggingTarget === eventTarget) {
    return;
  }

  if (eventTarget.classList.contains('draggable')) {
    const draggedDragzone = draggingTarget?.parentNode as HTMLDivElement;
    const eventTargetDragzone = eventTarget?.parentNode as HTMLDivElement;

    model.switchAppDataOrder(eventTarget.innerText, draggingTarget.innerText);

    draggedDragzone.appendChild(eventTarget);
    eventTargetDragzone.appendChild(draggingTarget);
    eventTarget.classList.toggle('dragenter', false);
  } else if (eventTarget.classList.contains('dragzone')) {
    const draggedDragzone = draggingTarget?.parentNode as HTMLDivElement;

    if (eventTarget?.children[0]) {
      model.switchAppDataOrder((eventTarget.children[0] as HTMLButtonElement).innerText, draggingTarget.innerText);

      draggedDragzone.appendChild(eventTarget.children[0]);
      eventTarget.appendChild(draggingTarget);
      eventTarget.children[0].classList.toggle('dragenter', false);
    } else {
      throw Error(HOME_DRAG_ERROR);
    }
  }
};

const clickAppIconButtons = (event: MouseEvent): void => {
  const eventTarget = event.target as HTMLElement;
  if (!eventTarget.classList.contains('app-icon')) {
    return;
  }
  historyPushState(eventTarget, BROWSER_TITLE);
  historyRouter(eventTarget.dataset.route);
};

const homePageController = (): void => {
  $('.home-inner')?.addEventListener('dragstart', dragstartAppIconButtons);
  $('.home-inner')?.addEventListener('dragend', dragendAppIconButtons);
  $('.home-inner')?.addEventListener('dragover', dragoverAppIconButtons);
  $('.home-inner')?.addEventListener('dragenter', dragenterAppIconButtons);
  $('.home-inner')?.addEventListener('dragleave', dragleaveAppIconButtons);
  $('.home-inner')?.addEventListener('drop', dropAppIconButtons);
  $('.home-inner')?.addEventListener('click', clickAppIconButtons);
};

export default homePageController;
