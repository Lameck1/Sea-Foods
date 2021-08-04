import createElement from './helpers/createElement';

export const header = (logo) => {
  const header = createElement('header', { class: 'header' });
  const container = createElement('container', { class: 'container' });
  const nav = createElement('nav', { class: 'nav' });
  const div = createElement('div', { class: 'logo' });
  const img = createElement('img', { src: logo, alt: 'logo' });
  div.append(img);
  const ul = createElement('ul', { class: 'nav-list' });
  const mealLi = createElement('li', { class: 'nav-item' });
  mealLi.textContent = 'Meal ';
  const counter = createElement('span');
  counter.textContent = '6';
  mealLi.append(counter);
  const categoriesLi = createElement('li', { class: 'nav-item' });
  categoriesLi.textContent = 'Categories';
  const areasLi = createElement('li', { class: 'nav-item' });
  areasLi.textContent = 'Areas';
  ul.append(mealLi, categoriesLi, areasLi);
  nav.append(div, ul);
  container.append(nav);
  header.append(container);
  return header;
};

export const footer = () => {

};