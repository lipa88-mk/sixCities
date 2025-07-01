import { createFileRoute } from "@tanstack/react-router";
import MainScreen from "../pages/main-screen/main-screen";
import { cities } from "../const";
import PageNotFound from "../pages/page-not-found/page-not-found";

export const Route = createFileRoute("/cities/$name")({
  loader: async ({ params }) => {
    const { name } = params;
    const cityName = name.charAt(0).toUpperCase() + name.slice(1);
    const isCity = cities.includes(cityName as (typeof cities)[number])
    if (!isCity) {
      throw new Error(`City ${cityName} not found`);
    }
    return cityName;
  },
  component: MainScreen,
  errorComponent: PageNotFound,
});
