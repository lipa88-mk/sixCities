import { FC, useState } from 'react';
import Authorization from '../../components/authorization/authorization';
import Logo from '../../components/logo/logo';
import { Offer } from '../../types/types';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/Map';
import type { CityPlacement } from '../../types/types';
import { CitiesList } from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';

export type MainScreenProps = {
  offers: Offer[];
  city: CityPlacement;
};

const MainScreen: FC<MainScreenProps> = ({ offers, city }) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  // const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);

  return (
    <div className="page page--gray page--main">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {activeCity.name}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by&nbsp;</span>
                <span className="places__sorting-type" tabIndex={0} onClick={() => setIsFilterOpen(!isFilterOpen)}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className={['places__options places__options--custom ', isFilterOpen ? 'places__options--opened' : ''].join(' ')}>
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>

              <CardsList offers={offers} />
            </section>
            <div className="cities__right-section">
              <Map locations={offers.map((offer) => offer.location)} city={city}></Map>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainScreen;
