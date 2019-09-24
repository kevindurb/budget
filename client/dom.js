export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export const createElement = document.createElement.bind(document);
export const div = () => createElement('div');
export const a = () => createElement('a');
export const button = () => createElement('button');
