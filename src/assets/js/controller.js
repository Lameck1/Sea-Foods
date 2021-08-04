import getMeals from './getMeals';
import getElement from './helpers/getElement';
import { getLikes, postLike } from './helpers/likes';
import listFoods from './helpers/listFoods';
import mealsCounter from './helpers/mealsCounter';
import homepageView from './homepageView';

export default () => ({
  async handlePostLike() {
    getElement('.food-list').addEventListener('click', async (event) => {
      event.preventDefault();
      if (event.target.className === 'like-icon') {
        const id = event.target.getAttribute('data-id');
        await postLike(id);
        const meals = await getMeals();
        const likes = await getLikes();
        listFoods(meals, likes);
      }
    });
  },

  async init() {
    const meals = await getMeals();
    const likes = await getLikes();
    homepageView();
    listFoods(meals, likes);
    mealsCounter(meals);
    this.handlePostLike();
  },
});
