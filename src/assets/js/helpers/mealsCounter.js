import getElement from './getElement';

export default (meals) => {
  const counter = getElement('.meal-count');
  counter.textContent = `(${meals.length})`;
};
