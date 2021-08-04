const API_KEY = 'rikZvpXgrNzHxQZjTHfV';
export const INVOLVEMENT_URI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}`;
export const BASE_URI = 'https://www.themealdb.com/api/json/v1/1/';

export const post = async (URI, data = {}) => {
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

export const get = async (URI) => {
  const response = await fetch(URI);
  return response;
};