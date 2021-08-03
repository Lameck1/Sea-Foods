import createElement from './createElement';
import createCommentModal from '../modal';
import fetchSingleMeal from '../fetchSingleMeal';
import { toggleModal } from '../dom.utils';

export default (foods, foodList) => {
  foods.forEach((food) => {
    const { idMeal, strMealThumb, strMeal } = food;

    const listItem = createElement('li', { class: 'food-container d-flex', 'data-id': `${idMeal}` });
    const mealThumb = createElement('img', { class: 'meal-thumb', 'data-id': `${idMeal}`, src: `${strMealThumb}` });
    const foodName = createElement('span', {
      'data-id': `${idMeal}`,
    }, strMeal);
    const detailsDiv = createElement('div', { class: 'details-div d-flex' });
    const likesDiv = createElement('div', { class: 'likes-div d-flex' });
    const likes = createElement('span', { class: 'material-icons' }, 'favorite_border');
    const likesCount = createElement('span', { class: 'likes-count' }, '0');
    const commentsBtn = createElement('button', { class: 'comments-btn' }, 'COMMENTS');

    commentsBtn.addEventListener('click', async () => {
      const modal = document.querySelector('#modal-overlay');
      const content = document.querySelector('#content');
      const { meals } = await fetchSingleMeal(idMeal);
      toggleModal(modal, content);
      modal.appendChild(
        createCommentModal({
          meals,
          toggle: toggleModal,
        }),
      );
    });

    likesDiv.append(likes, likesCount);
    detailsDiv.append(foodName, likesDiv);
    listItem.append(mealThumb, detailsDiv, commentsBtn);
    foodList.appendChild(listItem);
  });
};
