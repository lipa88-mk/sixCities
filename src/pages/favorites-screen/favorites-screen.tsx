import Authorization from '../../components/authorization/authorization';
import Logo from '../../components/logo/logo';
import { FC } from 'react';
import { City, Offer } from '../../types/offers';
import Card from '../../components/card/card';

type FavoritesScreenProps = {
  offers: Offer[];
};

const FavoritesScreen: FC<FavoritesScreenProps> = ({ offers }) => {
  const groupedOffersByCity = offers.reduce<{ [key: string]: Offer[] }>(
    (acc, curr) => {
      if (curr.isFavorite) {
        const city: City = curr.city;

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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
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
                      {groupedOffers.map((offer)=> <Card key={offer.id} offer={offer} place="favorites" />)}
                    </div>
                  </li>
                )
              )}
            </ul>
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
