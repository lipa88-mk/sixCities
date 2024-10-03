import { useParams } from 'react-router-dom';
import { FC } from 'react';
import Authorization from '../../components/authorization/authorization';
import Logo from '../../components/logo/logo';
import type { Offer } from '../../types/types';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { getRatingWidth } from '../../utils/utils';
import { Map } from '../../components/map/Map';
import Card from '../../components/card/card';
import { useAppSelector } from '../../hooks';

const PropertyScreen: FC = () => {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const reviews = useAppSelector((state) => state.reviews);

  const nearbyOffers = offers; //ToDo: replace
  const params = useParams();
  const currentOffer: Offer =
    offers.find((offer) => offer.id.toString() === params.id) || offers[0];

  const { title, type, price, rating, isPremium, isFavorite, images, bedrooms, maxAdults, goods, host, description } =
    currentOffer;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <Authorization />
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((propertyImage) => (
                <div key={propertyImage} className="property__image-wrapper">
                  <img
                    className="property__image"
                    src={propertyImage}
                    alt={title}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={[
                    'property__bookmark-button button',
                    isFavorite ? 'property__bookmark-button--active' : '',
                  ].join(' ')}
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">
                    {isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>

              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: getRatingWidth(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>

              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>

              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map(
                    (item) => <li key={item} className="property__inside-item">{item}</li>
                  )}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={['property__avatar-wrapper user__avatar-wrapper', host.isPro && 'property__avatar-wrapper--pro'].join(' ')}>
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt={`Host ${host.name} avatar`}
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro && <span className="property__user-status">Pro</span>}
                </div>

                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList reviews={reviews} />
            </div>
          </div>
          <Map
            locations={offers.map((offer) => offer.location)}
            city={city}
            place="property"
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((offer) => (
                <Card key={offer.id} offer={offer} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PropertyScreen;
