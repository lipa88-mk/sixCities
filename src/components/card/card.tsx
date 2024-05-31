import { FC } from 'react';
import type { Offer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

type CardProps = {
  offer: Offer;
}

function mouseMoveHandler (id:number): void {
  // eslint-disable-next-line no-console
  console.log('id: ', id);
}

const Card: FC<CardProps> = ({offer}) => {
  const {id, description, type, price, rating, isPremium} = offer;
  const ratingStyle = `${rating * 20 }%`;

  return (
    <article className="cities__place-card place-card">
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoutes.offer}/${ id}`} onMouseOver={()=>mouseMoveHandler(id)}>
          <img
            className="place-card__image"
            src="img/apartment-01.jpg"
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
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingStyle }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#/">{description}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );};

export { Card };
