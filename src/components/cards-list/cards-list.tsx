import { FC, useState } from 'react';
import Card from '../card/card';
import { useAppSelector } from '../../hooks';
import { Map } from '../../components/map/Map';

const CardsList: FC = () => {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name));

  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in {activeCity.name}
        </b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by&nbsp;</span>
          <span
            className="places__sorting-type"
            tabIndex={0}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul
            className={[
              'places__options places__options--custom ',
              isFilterOpen ? 'places__options--opened' : '',
            ].join(' ')}
          >
            <li className="places__option places__option--active" tabIndex={0}>
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

        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <Card
              key={offer.id.toString()}
              offer={offer}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            />
          ))}
        </div>
      </section>

      <div className="cities__right-section">
        <Map locations={offers.map(({ id, location }) => ({ id, ...location }))} city={activeCity} activeOffer={activeOffer} />
      </div>
    </>
  );
};

export default CardsList;
