import createElement from './helpers/createElement';
import { capitalizeStr, parseDate } from './helpers/parse';

const body = document.querySelector('body');

export const toggleModal = (modal, content) => {
  if (body.style.overflow === '') {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
    modal.innerHTML = '';
  }
  content.classList.toggle('open-modal');
};

export const header = (logo) => {
  const header = createElement('header', { class: 'header d-flex' });
  const nav = createElement('nav', { class: 'nav' });
  const div = createElement('div', { class: 'logo' });
  const img = createElement('img', { class: 'logo-img', src: logo });
  const ul = createElement('ul', { class: 'nav-list' });
  const mealLi = createElement('li', { class: 'nav-item' }, 'Meals');
  const counter = createElement('span', { class: 'meal-count' });
  mealLi.append(counter);
  const categoriesLi = createElement('li', { class: 'nav-item' }, 'Categories');
  const areasLi = createElement('li', { class: 'nav-item' }, 'Areas');
  ul.append(mealLi, categoriesLi, areasLi);
  div.append(img);
  nav.append(div, ul);
  header.append(nav);
  return header;
};

export const footer = () => {
  const footer = createElement('div', { class: 'footer' });
  const p = createElement('p', {}, '\u00A9 2021 :  Lameck Otieno | Omoogun Olawale');
  footer.append(p);
  return footer;
};

export const createComment = (comment) => {
  const li = createElement('li', { class: 'comment' });
  li.innerHTML = `<span>${parseDate(comment.creation_date)}
  ${capitalizeStr(comment.username)}:</span> <span>${comment.comment}</span>`;
  return li;
};
