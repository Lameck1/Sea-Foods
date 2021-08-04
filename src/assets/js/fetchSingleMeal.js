const BASE_URI = 'https://www.themealdb.com/api/json/v1/1/';

const fetchSingleMeal = async (id) => {
  const END_POINT = 'lookup.php?i=';
  const PARAMS = id;
  const URI = `${BASE_URI}${END_POINT}${PARAMS}`;
  const response = await fetch(URI);
  return response.json();
};

export default fetchSingleMeal;