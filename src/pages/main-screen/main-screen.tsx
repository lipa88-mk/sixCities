import { FC } from 'react';
import CardsList from '../../components/cards-list/cards-list';
import { CitiesList } from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import { SortingFunctions } from '../../const';
import { Spinner } from '../../components/spinner/spinner';
import { MainEmptyScreen } from './main-screen-empty';
import { Header } from '../../components/header/header';

const MainScreen: FC = () => {
  const activeSorting = useAppSelector((state) => state.sorting);
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) =>
    state.offers
      .filter((offer) => offer.city.name === state.city.name)
      .sort(SortingFunctions[state.sorting])
  );
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const isEmpty = !isOffersLoading && !offers;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={`page__main page__main--index ${
          isEmpty ? 'page__main--index-empty' : ''
        }`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div
            className={`cities__places-container container ${
              isEmpty ? 'cities__places-container--empty' : ''
            }`}
          >
            {isOffersLoading && <Spinner />}

            {!isOffersLoading && isEmpty && <MainEmptyScreen />}

            {!isOffersLoading && !isEmpty && (
              <CardsList
                activeSorting={activeSorting}
                offers={offers}
                activeCity={activeCity}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
export default MainScreen;
