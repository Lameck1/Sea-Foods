import createElement from './helpers/createElement';
import { fetchMealSingleComment, postMealComment } from './helpers/comment';
import { capitalizeStr, parseDate, commentCounter } from './helpers/parse';
import { createComment } from './dom.utils';

const baseModal = (args) => {
  const {
    meals, toggle, content, formContent,
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
  modalContent.append(modalHeader, modalBody, formContent);
  modal.append(modalContent);

  return modal;
};

const createCommentModal = (args) => {
  const { meals, toggle, response } = args;
  const { idMeal } = meals[0];
  const counter = commentCounter(response);
  let comments = [];
  if (counter > 0) {
    comments = response;
  }
  const content = createElement('div', { class: 'comments' });
  const h4 = createElement('h4');
  const counterSpan = createElement('span', { class: 'counter' });
  counterSpan.textContent = ` (${commentCounter(comments)})`;
  h4.innerHTML = 'Comments ';
  const commentList = createElement('ul', { class: 'comments-list' });
  h4.appendChild(counterSpan);
  if (comments.length > 0) {
    comments.forEach((comment) => {
      commentList.append(createComment(comment));
    });
  }

  const formContent = createElement('div', { class: 'comment-form' });

  const h6 = createElement('h6');
  h6.textContent = 'Add comment';

  const form = createElement('form');
  const nameField = createElement('div', { class: 'field' });
  const nameInput = createElement('input', {
    class: 'input', type: 'text', id: 'name', name: 'name', placeholder: 'Your name', required: 'required',
  });
  nameField.append(nameInput);

  const messageField = createElement('div', { class: 'field' });
  const messageArea = createElement('textarea', {
    class: 'textarea', cols: 30, rows: 10, id: 'message', name: 'message', placeholder: 'Your insights', required: 'required',
  });
  messageField.appendChild(messageArea);

  const submitField = createElement('div', { class: 'field' });
  const submitBtn = createElement('button', { class: 'btn btn-submit' });
  submitBtn.textContent = 'Submit';
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
      item_id: idMeal,
      username: nameInput.value.trim(),
      comment: messageArea.value.trim(),
    };
    await postMealComment(data);
    const comments = await fetchMealSingleComment(idMeal);
    counterSpan.textContent = ` (${commentCounter(comments)})`;
    const lastComment = comments.pop();
    const li = createElement('li', { class: 'comment' });
    li.innerHTML = `<span>${parseDate(lastComment.creation_date)} 
    ${capitalizeStr(lastComment.username)}:</span> <span>${lastComment.comment}</span>`;
    commentList.appendChild(li);

    nameInput.value = '';
    messageArea.value = '';
  });
  content.append(h4, commentList);
  submitField.append(submitBtn);

  form.append(nameField, messageField, submitField);
  formContent.append(h6, form);

  return baseModal({
    meals,
    toggle,
    content,
    formContent,
  });
};

export default createCommentModal;