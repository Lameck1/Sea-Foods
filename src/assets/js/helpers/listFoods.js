import createElement from './createElement';
import createCommentModal from '../modal';
import fetchSingleMeal from '../fetchSingleMeal';
import { toggleModal } from '../dom.utils';
import getElement from './getElement';
import { fetchMealSingleComment } from './comment';

export default (foods, likes) => {
  const foodList = getElement('.food-list');
  foodList.textContent = '';
  foods.forEach((food) => {
    const { idMeal, strMealThumb, strMeal } = food;
    const item = likes.find((like) => like.item_id === idMeal);
    const listItem = createElement('li', { class: 'food-container d-flex', 'data-id': `${idMeal}` });
    const mealThumb = createElement('img', { class: 'meal-thumb', 'data-id': `${idMeal}`, src: `${strMealThumb}` });
    const foodName = createElement('span', {
      'data-id': `${idMeal}`,
      class: 'item-name',
    }, strMeal);
    const detailsDiv = createElement('div', { class: 'details-div d-flex' });
    const likesDiv = createElement('div', { class: 'likes-div d-flex' });
    const likeIcon = createElement('span', { class: 'like-icon', 'data-id': `${idMeal}` }, '');
    const likesCount = createElement('span', { class: 'likes-count' }, `${item ? item.likes : 0}`);
    const commentsBtn = createElement('button', { class: 'btn comments-btn' }, 'COMMENTS');

    commentsBtn.addEventListener('click', async () => {
      const modal = document.querySelector('#modal-overlay');
      const content = document.querySelector('#content');
      const { meals } = await fetchSingleMeal(idMeal);
      const response = await fetchMealSingleComment(idMeal);
      toggleModal(modal, content);
      modal.appendChild(
        createCommentModal({
          meals,
          response,
          toggle: toggleModal,
        }),
      );
    });

    likesDiv.append(likeIcon, likesCount);
    detailsDiv.append(foodName, likesDiv);
    listItem.append(mealThumb, detailsDiv, commentsBtn);
    foodList.appendChild(listItem);
  });
};
