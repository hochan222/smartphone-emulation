const $ = (selector: string): HTMLElement | null => document.querySelector(selector);

const $$ = (selector: string): NodeList | null => document.querySelectorAll(selector);

export { $, $$ };
