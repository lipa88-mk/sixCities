import { Offer } from '../../types/types';
import Card from '../../components/card/card';
import { useAppSelector } from '../../hooks';
import { FavoritesEmptyScreen } from './favorites-empty-screen';
import { Header } from '../../components/header/header';
import { getFavoriteOffers } from '../../store/site-data/selectors';

const FavoritesScreen = (): JSX.Element => {
  const favorites = useAppSelector(getFavoriteOffers);
  const isEmpty = favorites.length === 0;

  const groupedOffersByCity = favorites.reduce<{ [key: string]: Offer[] }>(
    (acc, curr) => {
      if (curr.isFavorite) {
        const city = curr.city.name;

        if (!(city in acc)) {
          acc[city] = [];
        }

        acc[city].push(curr);
      }

      return acc;
    },
    {}
  );

  return (
    <div className={['page', isEmpty && 'page--favorites-empty'].join(' ')}>
      <Header/>

      <main
        className={[
          'page__main page__main--favorites',
          isEmpty && 'page__main--favorites-empty',
        ].join(' ')}
      >
        <div className="page__favorites-container container">
          <section
            className={['favorites', isEmpty && 'favorites--empty'].join(' ')}
          >
            {isEmpty ? (
              <FavoritesEmptyScreen />
            ) : (
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Object.entries(groupedOffersByCity).map(
                    ([city, groupedOffers]) => (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#/">
                              <span>{city}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {groupedOffers.map((offer) => (
                            <Card
                              key={offer.id}
                              offer={offer}
                              place="favorites"
                            />
                          ))}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </>
            )}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
};

export default FavoritesScreen;
