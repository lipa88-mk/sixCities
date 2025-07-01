import { FC } from "react";
import Card from "../../components/card/card";
import { Map } from "../../components/map/Map";
import { Spinner } from "../../components/spinner/spinner";
import { useFetchNearbyOffers } from "../../services/queries";
import { Route } from "../../routes/cities_.$name.$id";

export const PropertyNearbyOffers: FC = () => {
  const { id } = Route.useParams();
   const { data: nearbyOffers, isLoading: isNearbyOffersLoading } = useFetchNearbyOffers(id);

    if (isNearbyOffersLoading && !nearbyOffers) {
      return <Spinner />;
    }
  return (
    <>
      <div className="property">
        <Map
          locations={nearbyOffers!.map((offer) => offer.location)}
          city={nearbyOffers![0].city}
          place="property"
        />
      </div>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {nearbyOffers!.map((offer) => (
              <Card key={offer.id} offer={offer} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
