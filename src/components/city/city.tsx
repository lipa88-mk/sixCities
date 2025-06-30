import { FC } from "react";
import { CityName } from "../../types/types";
import { Link } from "@tanstack/react-router";
import { classes } from "../../utils/utils";

type CityProps = {
  name: CityName;
  isActive: boolean;
};

export const City: FC<CityProps> = ({ name, isActive = false }) => {
  return (
    <li className="locations__item">
      <Link
        to={"/cities/$name"}
        params={{ name: name.toLowerCase() }}
        className={classes(
          "locations__item-link tabs__item",
          isActive && " tabs__item--active",
        )}
      >
        <span>{name}</span>
      </Link>
    </li>
  );
};
