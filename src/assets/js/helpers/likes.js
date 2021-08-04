const API_KEY = 'rikZvpXgrNzHxQZjTHfV';
const LIKES_ENDPOINT = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/likes`;

export const postLike = async (mealId) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const newScore = JSON.stringify({ item_id: mealId });

  const requestOptions = {
    method: 'POST',
    headers,
    body: newScore,
    redirect: 'follow',
  };

  await fetch(LIKES_ENDPOINT, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export const getLikes = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch(LIKES_ENDPOINT, requestOptions);
  const likes = await response.json();
  return likes;
};
