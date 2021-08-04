import { post, get, INVOLVEMENT_URI } from './api';

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