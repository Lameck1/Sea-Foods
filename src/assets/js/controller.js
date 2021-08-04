import getMeals from './getMeals';
import { getLikes } from './helpers/likes';
import listFoods from './helpers/listFoods';
import homepageView from './homepageView';

export default () => ({
  async init() {
    const meals = await getMeals();
    const likes = await getLikes();
    homepageView();
    listFoods(meals, likes);
    getMeals();
  },
});
