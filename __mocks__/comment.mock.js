const fetchMealSingleComment = (id) => {
  const meals = [
    {
      idMeal: '52819',
      comments: [
        {
          username: 'Ife',
          comment: 'insights',
          creation_date: '2021-04-08',
        },
        {
          username: 'Lameck',
          comment: 'insights',
          creation_date: '2021-04-08',
        },
        {
          username: 'Sola',
          comment: 'insights sweet',
          creation_date: '2021-04-08',
        },
      ],
    },
    {
      idMeal: '52764',
      comments: [
        {
          username: 'Lydia',
          comment: 'tasty',
          creation_date: '2021-04-08',
        },
      ],
    },
  ];
  const comments = meals.find((meal) => id === meal.idMeal);
  return comments || [];
};

export default fetchMealSingleComment;
