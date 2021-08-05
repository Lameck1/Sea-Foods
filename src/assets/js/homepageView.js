import createElement from './helpers/createElement';
import Logo from '../img/logo.png';
import { header, footer } from './dom.utils';

export default () => {
  const navigation = header(Logo);
  const bottom = footer();
  const main = createElement('main', { class: 'main d-flex' });
  const foodList = createElement('ul', { class: 'food-list d-flex' });
  const root = createElement('div', { class: 'root', id: 'root' });
  const modalOverlay = createElement('div', { class: 'modal-overlay', id: 'modal-overlay' });
  const content = createElement('div', { class: 'content', id: 'content' });

  main.append(foodList);
  root.append(navigation, main, bottom);
  content.append(root, modalOverlay);
  document.body.append(content);
};
