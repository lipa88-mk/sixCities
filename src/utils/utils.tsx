import { months } from '../const';

export const getRatingWidth = (rating: number): string => (`${rating * 20}%`);

export const formatDate = (date: string) => {
  const dateParsed = new Date(date);

  return `${months[dateParsed.getMonth()]} ${dateParsed.getFullYear()}`;
};
