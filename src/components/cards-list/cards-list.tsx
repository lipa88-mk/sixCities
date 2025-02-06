import { FC, useState } from 'react';
import Card from '../card/card';
import { useAppDispatch } from '../../hooks';
import { Map } from '../../components/map/Map';
import { SortingList } from '../../components/sorting-list/sorting-list';
import { Offer, SortName, CityPlacement } from '../../types/types';
import { setSorting } from '../../store/action';

type CardsListProps = {
  activeSorting: SortName;
  offers: Offer[];
  activeCity: CityPlacement;
};

const CardsList: FC<CardsListProps> = ({
  activeSorting,
  offers,
  activeCity,
}) => {
  const dispatch = useAppDispatch();
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const handleSortingChange = (name: SortName) => {
    dispatch(setSorting(name));
  };

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in {activeCity.name}
        </b>

        <SortingList
          currentSorting={activeSorting}
          onChange={handleSortingChange}
        />

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
        <Map
          locations={offers.map(({ id, location }) => ({ id, ...location }))}
          city={activeCity}
          activeOffer={activeOffer}
        />
      </div>
    </>
  );
};

export default CardsList;
