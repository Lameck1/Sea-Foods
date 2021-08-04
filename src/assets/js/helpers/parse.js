export const parseDate = (date) => {
  const formatDate = date.split('-');
  return `${formatDate[2]}/${formatDate[1]}/${formatDate[0]}`;
};

export const capitalizeStr = (text) => {
  const newText = text[0].toUpperCase() + text.substring(1);
  return newText;
};
