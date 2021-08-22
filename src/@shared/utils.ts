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

const getElementIndex = (element: HTMLElement): number => {
  let count = -1;
  let elementSibling = element.previousSibling;
  while (elementSibling != null) {
    elementSibling = elementSibling.previousSibling;
    count += 1;
  }
  return count;
};

const atoi = (str: string): string | undefined | null => {
  const num = str.match(/\d+/g);
  if (num && num.length > 0) {
    return num[0];
  }
  return null;
};

const padStart = (targetLength: number, padString: string, str: string): string => {
  return str.length >= targetLength ? str : new Array(targetLength - str.length + 1).join(padString) + str;
};

export { $, $$, getCurrentDate, historyPushState, getElementIndex, atoi, padStart };
