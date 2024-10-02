import { FC, useState } from 'react';
import { SortName } from '../../types/types';
import { Sorting } from '../../const';

type SortingListProps = {
  currentSorting: SortName;
  onChange: (name: SortName) => void;
}

export const SortingList: FC<SortingListProps> = ({currentSorting, onChange}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sortingMap = Object.entries(Sorting) as [SortName, Sorting][];

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {Sorting[currentSorting]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul
        className={[
          'places__options places__options--custom ',
          isOpen ? 'places__options--opened' : '',
        ].join(' ')}
      >
        {
          sortingMap.map(([name, title])=> (
            <li
              key ={name}
              className={`places__option ${currentSorting === name ? ' places__option--active' : ' '}`}
              tabIndex={0}
              onClick={() => {onChange(name); setIsOpen(false);}}
            >
              {title}
            </li>
          ))
        }
      </ul>
    </form>
  );
};
