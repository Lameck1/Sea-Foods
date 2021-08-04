import mealsCounter from '../src/assets/js/helpers/mealsCounter';

const { getByTestId } = require('@testing-library/dom');

const meals = [
  {
    strMeal: 'Baked salmon with fennel & tomatoes',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
    idMeal: '52959',
  },
  {
    strMeal: 'Cajun spiced fish tacos',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
    idMeal: '52819',
  },
];

describe('Meals Counter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <ul class="nav-list">
      <li class="nav-item">
        Meals<span data-testid="meal-count"></span>
      </li>
    </ul>
    `;
  });
  test('it counts the number of meals', () => {
    const container = document.body;
    const element = getByTestId(container, 'meal-count');
    const count = mealsCounter(meals, element);
    expect(count).toBe(2);
  });

  test('it updates the UI with the number of meal counts', () => {
    const container = document.body;
    const element = getByTestId(container, 'meal-count');
    mealsCounter(meals, element);
    expect(element.textContent).toBe('(2)');
  });
});
