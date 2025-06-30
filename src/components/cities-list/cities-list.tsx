import { cities } from "../../const";
import { City } from "../city/city";
import { Route } from "../../routes/cities.$name";

export const CitiesList = (): JSX.Element => {
  const { name } = Route.useParams();
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City key={city} name={city} isActive={city.toLowerCase() === name} />
      ))}
    </ul>
  );
};
