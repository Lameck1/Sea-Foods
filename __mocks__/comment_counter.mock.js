const commentCounter = (response) => {
  if (response.comments) {
    return response.comments.length;
  }
  return response.length;
};

export default commentCounter;