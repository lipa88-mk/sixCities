import { FC } from "react";
import Card from "../../components/card/card";
import { Map } from "../../components/map/Map";
import { useAppSelector } from "../../hooks";
import { getCity } from "../../store/site-process/selectors";
import { ApiRoute } from "../../const";
import { api } from "../../store";
import { useQuery } from "@tanstack/react-query";
import { Offer } from "../../types/types";
import { Spinner } from "../../components/spinner/spinner";

type PropertyNearbyOffersProps = {
  id: string
};

export const PropertyNearbyOffers: FC<PropertyNearbyOffersProps> = ({id}) => {
  const city = useAppSelector(getCity);
   const { data: nearbyOffers, isLoading: isNearbyOffersLoading } = useQuery({
      queryKey: ["nearbyOffersData"],
      queryFn: async () => {
        const response = await api.get<Offer[]>(
          `${ApiRoute.Offers}/${id}/nearby`
        );
        return response.data;
      },
    });

    if (isNearbyOffersLoading && !nearbyOffers) {
      return <Spinner />;
    }
  return (
    <>
      <div className="property">
        <Map
          locations={nearbyOffers!.map((offer) => offer.location)}
          city={city}
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
