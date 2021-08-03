import getMeals from './getMeals';
import homepageView from './homepageView';

export default () => ({
  init() {
    homepageView();
    getMeals();
  },
});
