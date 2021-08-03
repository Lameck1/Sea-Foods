import createElement from './helpers/createElement';
import Logo from '../img/logo.png';
import { header, footer } from './dom.utils';

export default () => {
  const navigation = header(Logo);
  const bottom = footer();
  const main = createElement('main', { class: 'main d-flex' });
  const foodList = createElement('ul', { class: 'food-list d-flex' });
  main.append(foodList);
  document.body.append(navigation, main, bottom);
};
