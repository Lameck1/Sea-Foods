const API_KEY = 'rikZvpXgrNzHxQZjTHfV';
const INVOLVEMENT_URI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}`;

const post = async (URI, data = {}) => {
  const response = await fetch(URI, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  return response;
};

const get = async (URI) => {
  const response = await fetch(URI);
  return response;
};

export const postMealComment = async (data) => {
  const END_POINT = '/comments/';
  const URI = `${INVOLVEMENT_URI}${END_POINT}`;
  await post(URI, data);
};

export const fetchMealSingleComment = async (id) => {
  const END_POINT = `/comments?item_id=${id}`;
  const URI = `${INVOLVEMENT_URI}${END_POINT}`;
  const response = await get(URI);
  return response.json();
};