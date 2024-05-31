import { FC } from 'react';
import type { Offer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

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

  const ratingStyle = `${Math.round(rating) * 20}%`;
  const handleMouseMove = () => {
    onMouseMove(id);
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoutes.offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage.toString()}
            width="260"
            height="200"
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
            <span style={{ width: ratingStyle }}></span>
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

export { Card };
