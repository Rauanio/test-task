export const formatDate = (date: string | Date) => {
  const dateObj = new Date(date);

  const formattedDate = dateObj.toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return formattedDate;
};
