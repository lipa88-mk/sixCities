import { months } from '../const';
import cn, { type ArgumentArray } from 'classnames';

export const getRatingWidth = (rating: number): string => (`${rating * 20}%`);

export const formatDate = (date: string) => {
  const dateParsed = new Date(date);

  return `${months[dateParsed.getMonth()]} ${dateParsed.getFullYear()}`;
};

export const classes = (...args: ArgumentArray) => cn(args);
