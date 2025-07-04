import { FC } from "react";
import ReviewsList from "../../components/reviews-list/reviews-list";
import { getRatingWidth } from "../../utils/utils";
import { Spinner } from "../../components/spinner/spinner";
import Bookmark from "../../components/bookmark/bookmark";
import { Header } from "../../components/header/header";
import { PropertyNearbyOffers } from "./property-nearby-offers";
import { useFetchProperty } from "../../services/queries";
import { Navigate } from "@tanstack/react-router";
import { Route } from "../../routes/cities_.$name.$id";
import PageNotFound from "../page-not-found/page-not-found";

const PropertyScreen: FC = () => {
  const { id: offerId } = Route.useParams();

  const { data: currentOffer, isLoading } = useFetchProperty(offerId);

  if (!currentOffer) {
    return <PageNotFound />;
  }

  if (isLoading && !currentOffer) {
    return <Spinner />;
  }

  const {
    title,
    type,
    price,
    rating,
    isPremium,
    isFavorite,
    images,
    bedrooms,
    maxAdults,
    goods,
    host,
    description,
    id,
  } = currentOffer;

  const headerImages = images.slice(0, 6);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {headerImages.map((propertyImage) => (
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
                <Bookmark
                  placement="property"
                  isFavorite={isFavorite}
                  id={id}
                />
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
                  {goods.map((item) => (
                    <li key={item} className="property__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={[
                      "property__avatar-wrapper user__avatar-wrapper",
                      host.isPro && "property__avatar-wrapper--pro",
                    ].join(" ")}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt={`Host ${host.name} avatar`}
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro && (
                    <span className="property__user-status">Pro</span>
                  )}
                </div>

                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>

              <ReviewsList />
            </div>
          </div>
        </section>

        <PropertyNearbyOffers />
      </main>
    </div>
  );
};

export default PropertyScreen;
