// import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { CityName } from '../../types/types';

type CityProps = {
  name: CityName;
  isActive: boolean;
  onClick: (name: CityName) => void;
};

export const City: FC<CityProps> = ({ name, isActive = false, onClick }) => {
  const handleClick = () => onClick(name);
  return (
    <li className="locations__item" onClick={handleClick}>
      {/* ToDo: add Navigation */}

      {/* <NavLink */}
      {/* to={name.toLowerCase()} */}
      <a
        className={`locations__item-link tabs__item ${
          isActive ? ' tabs__item--active' : ''
        }`}
        href={'#1'}
      >
        <span>{name}</span>
      </a>
      {/* </NavLink> */}
    </li>
  );
};
