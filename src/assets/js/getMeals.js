import 'regenerator-runtime/runtime';

const URI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

export default async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const result = await fetch(URI, requestOptions);
  const { meals } = await result.json();
  return meals;
};
