import createElement from './helpers/createElement';

const baseModal = (args) => {
  const {
    meals, toggle, content,
  } = args;
  const {
    strMeal, strMealThumb, strCategory, strArea,
  } = meals[0];
  const modal = createElement('div', { class: 'modal' });
  const modalContent = createElement('div', { class: 'modal-content' });
  const modalHeader = createElement('div', { class: 'modal-header' });
  const img = createElement('img', { class: 'modal-img', src: strMealThumb, alt: strMealThumb });
  const closeIcon = createElement('span', { class: 'material-icons', id: 'closeModal' }, 'close');
  closeIcon.addEventListener('click', () => {
    const modal = document.querySelector('#modal-overlay');
    const content = document.querySelector('#content');
    toggle(modal, content);
  });
  modalHeader.append(img, closeIcon);
  const modalBody = createElement('div', { class: 'modal-body' });
  const briefDetails = createElement('div', { class: 'brief-details' });
  const h3 = createElement('h3');
  h3.textContent = strMeal;
  const listDetails = createElement('ul', { class: 'list-details' });
  const mealCategory = createElement('li', { class: 'tag' });
  mealCategory.textContent = `Category: ${strCategory}`;
  const mealArea = createElement('li', { class: 'tag' });
  mealArea.textContent = `Area: ${strArea}`;
  listDetails.append(mealCategory, mealArea);
  briefDetails.append(h3, listDetails);
  modalBody.append(briefDetails, content);
  modalContent.append(modalHeader, modalBody);
  modal.append(modalContent);

  return modal;
};

const createCommentModal = (args) => {
  const { meals, toggle } = args;
  // const { error: { status } } = response;
  // const comments = status === 400 ? [] : response;
  const content = createElement('div', { class: 'comments' });
  const h4 = createElement('h4');
  // const counter = createElement('span', { class: 'counter' });
  // counter.textContent = ` (${comments.length})`;
  h4.innerHTML = 'Comments ';
  const commentList = createElement('ul', { class: 'comments-list' });
  // h4.appendChild(counter);
  const li = createElement('li', { class: 'comment' });
  li.innerHTML = '<span>01/02/2021 Wale:</span> <span>Your insights</span>';
  const li2 = createElement('li', { class: 'comment' });
  li2.innerHTML = '<span>01/02/2025 Lameck:</span> <span>Your insights</span>';
  commentList.append(li, li2);
  content.append(h4, commentList);

  return baseModal({
    meals,
    toggle,
    content,
  });
};

export default createCommentModal;