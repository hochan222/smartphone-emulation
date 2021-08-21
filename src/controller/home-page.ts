import { $ } from '../@shared/utils';

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

    draggedDragzone.appendChild(eventTarget);
    eventTargetDragzone.appendChild(draggingTarget);
    eventTarget.classList.toggle('dragenter', false);
  } else if (eventTarget.classList.contains('dragzone')) {
    const draggedDragzone = draggingTarget?.parentNode as HTMLDivElement;

    if (eventTarget?.children[0]) {
      draggedDragzone.appendChild(eventTarget.children[0]);
      eventTarget.appendChild(draggingTarget);
      eventTarget.children[0].classList.toggle('dragenter', false);
    } else {
      throw Error('drag에서 뭔가 잘못됨');
    }
  }
};

const homePageController = (): void => {
  $('.home-inner')?.addEventListener('dragstart', dragstartAppIconButtons);
  $('.home-inner')?.addEventListener('dragend', dragendAppIconButtons);
  $('.home-inner')?.addEventListener('dragover', dragoverAppIconButtons);
  $('.home-inner')?.addEventListener('dragenter', dragenterAppIconButtons);
  $('.home-inner')?.addEventListener('dragleave', dragleaveAppIconButtons);
  $('.home-inner')?.addEventListener('drop', dropAppIconButtons);
};

export default homePageController;
