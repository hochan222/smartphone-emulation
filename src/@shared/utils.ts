const $ = (selector: string): HTMLElement | null => document.querySelector(selector);

const $$ = (selector: string): NodeList | null => document.querySelectorAll(selector);

const getCurrentDate = (): string => {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}년 ${currentDate.getMonth()}월 ${currentDate.getDate()}일 ${currentDate.getHours()}시 ${currentDate.getMinutes()}분 ${currentDate.getSeconds()}초`;
};

const historyPushState = (eventTarget: HTMLElement, title: string): void => {
  const pathName = eventTarget.dataset.route;
  if (pathName) {
    window.history.pushState({}, title, window.location.origin + pathName);
  }
};

export { $, $$, getCurrentDate, historyPushState };
