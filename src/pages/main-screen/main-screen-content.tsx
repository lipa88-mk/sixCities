import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { CitiesList } from "../../components/cities-list/cities-list";
import { Spinner } from "../../components/spinner/spinner";
import { MainEmptyScreen } from "./main-screen-empty";
import CardsList from "../../components/cards-list/cards-list";
import { getSorting } from "../../store/site-process/selectors";
import { SortingFunctions } from "../../const";
import { useFetchOffers } from "../../services/queries";
import { Route } from "../../routes/cities.$name";
import { classes } from "../../utils/utils";

const MainScreenContent: FC = () => {
  const activeSorting = useAppSelector(getSorting);
  const { name } = Route.useParams();
  const { data, isLoading: isOffersLoading } = useFetchOffers();

  const offers = data
    ?.filter((offer) => offer.city.name.toLowerCase() === name)
    .sort(SortingFunctions[activeSorting]);

  return (
    <main
      className={classes(
        "page__main page__main--index",
        !isOffersLoading && !offers && "page__main--index-empty",
      )}
    >
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <div className="cities">
        <div
          className={classes(
            "cities__places-container container",
            !isOffersLoading && !offers && "cities__places-container--empty",
          )}
        >
          {isOffersLoading && <Spinner />}

          {!isOffersLoading && !offers && <MainEmptyScreen />}

          {!isOffersLoading && offers && (
            <CardsList
              activeSorting={activeSorting}
              offers={offers}
              activeCity={offers[0].city}
            />
          )}
        </div>
      </div>
    </main>
  );
};
export default MainScreenContent;
