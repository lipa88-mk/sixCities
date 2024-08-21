import { FC } from 'react';
import type { Offer } from '../../types/types';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import {getRatingWidth} from '../../utils/utils';

export type CardProps = {
  offer: Offer;
  onMouseMove?: (id: number) => void;
  onMouseLeave?: () => void;
  place?: 'cities' | 'favorites';
};

const Card: FC<CardProps> = ({
  offer,
  place = 'cities',
  onMouseMove = () => void 0,
  onMouseLeave = () => void 0,
}) => {
  const {
    id,
    title,
    type,
    price,
    rating,
    isPremium,
    isFavorite,
    previewImage,
  } = offer;

  // const ratingStyle = `${Math.round(rating) * 20}%`;
  const handleMouseMove = () => {
    onMouseMove(id);
  };

  const cardImgSizes = {
    cities: { width: '260', height: '200' },
    favorites: { width: '150', height: '110' },
  };

  return (
    <article
      className={[
        'place-card',
        place === 'cities' ? 'cities__place-card' : 'favorites__card',
      ].join(' ')}
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoutes.offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage.toString()}
            width={cardImgSizes[place].width}
            height={cardImgSizes[place].height}
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={[
              'place-card__bookmark-button button',
              isFavorite ? 'place-card__bookmark-button--active' : '',
            ].join(' ')}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoutes.offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default Card;
