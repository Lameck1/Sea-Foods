import 'regenerator-runtime/runtime';
import getElement from './helpers/getElement';
import listFoods from './helpers/listFoods';

const URI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

export default async () => {
  const foodList = getElement('.food-list');
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  await fetch(URI, requestOptions)
    .then((response) => response.json())
    .then((result) => listFoods(result.meals, foodList))
    .catch((error) => error);
};
