import { FC, useState } from 'react';
import Card from '../card/card';
import type { Offer } from '../../types/offers';

type CardsListProps = {
  offers: Offer[];
};

const CardsList: FC<CardsListProps> = ({ offers }) => {
  // will be used soon
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };
  return (
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
  );
};

export default CardsList;
