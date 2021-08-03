import createElement from './helpers/createElement';

export default () => {
  const main = createElement('main', { class: 'main d-flex' });
  const foodList = createElement('ul', { class: 'food-list d-flex' });
  main.append(foodList);
  document.body.append(main);
};
