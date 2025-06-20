import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { CitiesList } from '../../components/cities-list/cities-list';
import { Spinner } from '../../components/spinner/spinner';
import { MainEmptyScreen } from './main-screen-empty';
import CardsList from '../../components/cards-list/cards-list';
import { getCity, getSorting } from '../../store/site-process/selectors';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../store';
import { Offer } from '../../types/types';
import { ApiRoute, SortingFunctions } from '../../const';

const MainScreenContent: FC = () => {
  const activeSorting = useAppSelector(getSorting);
  const activeCity = useAppSelector(getCity);

  const {data, isLoading: isOffersLoading} = useQuery({
    queryKey: ["offers"],
    queryFn: async () => {
      try {
        const response = await api.get<Offer[]>(ApiRoute.Offers);
        return response.data;
      } catch (error) {
        const axiosError = error as Error;
        console.error('Error fetching offers:', axiosError.message);
        throw axiosError;
      }
    }
  });

  const offers = data?.filter((offer) => offer.city.name === activeCity.name).sort(SortingFunctions[activeSorting]);
  const isEmpty = !isOffersLoading && !offers;

  return (
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
              offers={offers ?? []}
              activeCity={activeCity}
            />
          )}
        </div>
      </div>
    </main>
  );
};
export default MainScreenContent;
